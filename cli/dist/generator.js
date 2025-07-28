"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentGenerator = void 0;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const templates_1 = require("./templates");
class ComponentGenerator {
    constructor(options) {
        this.componentName = options.componentName;
        this.outputPath = options.outputPath;
        this.componentDir = path.join(this.outputPath, 'components', this.componentName);
    }
    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    validateComponentName() {
        if (!this.componentName || this.componentName.trim() === '') {
            throw new Error('Component name is required');
        }
        if (!/^[A-Za-z][A-Za-z0-9]*$/.test(this.componentName)) {
            throw new Error('Component name must start with a letter and contain only letters and numbers');
        }
    }
    async ensureDirectoryExists() {
        try {
            await fs.ensureDir(this.componentDir);
        }
        catch (error) {
            throw new Error(`Failed to create directory: ${this.componentDir}`);
        }
    }
    async checkIfComponentExists() {
        const exists = await fs.pathExists(this.componentDir);
        if (exists) {
            const files = await fs.readdir(this.componentDir);
            if (files.length > 0) {
                throw new Error(`Component "${this.componentName}" already exists at ${this.componentDir}`);
            }
        }
    }
    async generateFile(fileName, content) {
        const filePath = path.join(this.componentDir, fileName);
        try {
            await fs.writeFile(filePath, content, 'utf8');
            console.log(`✅ Created: ${fileName}`);
        }
        catch (error) {
            throw new Error(`Failed to create file: ${fileName}`);
        }
    }
    async generate() {
        try {
            // Validate inputs
            this.validateComponentName();
            // Capitalize component name for consistency
            this.componentName = this.capitalizeFirstLetter(this.componentName);
            this.componentDir = path.join(this.outputPath, 'components', this.componentName);
            // Check if component already exists
            await this.checkIfComponentExists();
            // Ensure directory exists
            await this.ensureDirectoryExists();
            console.log(`🚀 Generating ${this.componentName} component...`);
            console.log(`📁 Output directory: ${this.componentDir}`);
            // Generate all files
            await Promise.all([
                this.generateFile(`${this.componentName}.tsx`, (0, templates_1.componentTemplate)(this.componentName)),
                this.generateFile(`${this.componentName}Types.ts`, (0, templates_1.typesTemplate)(this.componentName)),
                this.generateFile(`${this.componentName}.styles.ts`, (0, templates_1.stylesTemplate)(this.componentName)),
                this.generateFile(`${this.componentName}.stories.ts`, (0, templates_1.storiesTemplate)(this.componentName)),
                this.generateFile(`${this.componentName}.mock.data.ts`, (0, templates_1.mockDataTemplate)(this.componentName)),
            ]);
            console.log(`\n🎉 Successfully generated ${this.componentName} component!`);
            console.log(`📂 Location: ${this.componentDir}`);
            console.log(`\nFiles created:`);
            console.log(`  • ${this.componentName}.tsx`);
            console.log(`  • ${this.componentName}Types.ts`);
            console.log(`  • ${this.componentName}.styles.ts`);
            console.log(`  • ${this.componentName}.stories.ts`);
            console.log(`  • ${this.componentName}.mock.data.ts`);
        }
        catch (error) {
            console.error(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            throw error;
        }
    }
}
exports.ComponentGenerator = ComponentGenerator;
//# sourceMappingURL=generator.js.map