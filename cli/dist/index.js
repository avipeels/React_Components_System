#!/usr/bin/env node
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const path = __importStar(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const generator_1 = require("./generator");
const program = new commander_1.Command();
program
    .name('generate-component')
    .description('CLI tool to generate React component files with TypeScript, Storybook, and styled-components')
    .version('1.0.0');
program
    .argument('<component-name>', 'Name of the component to generate')
    .option('-o, --output <path>', 'Output directory path', process.cwd())
    .description('Generate a new React component with all necessary files')
    .action(async (componentName, options) => {
    try {
        console.log(chalk_1.default.blue('🔧 React Component Generator'));
        console.log(chalk_1.default.gray('================================\n'));
        const generator = new generator_1.ComponentGenerator({
            componentName,
            outputPath: path.join(process.cwd()),
        });
        await generator.generate();
        console.log(chalk_1.default.green('\n✨ Component generation completed successfully!'));
        console.log(chalk_1.default.gray('\nNext steps:'));
        console.log(chalk_1.default.gray('1. Import and use your component in your application'));
        console.log(chalk_1.default.gray('2. Run Storybook to see your component in action'));
        console.log(chalk_1.default.gray('3. Customize the component styles and functionality'));
    }
    catch (error) {
        console.error(chalk_1.default.red('\n❌ Generation failed:'));
        console.error(chalk_1.default.red(error instanceof Error ? error.message : 'Unknown error'));
        process.exit(1);
    }
});
// Handle cases where no arguments are provided
if (process.argv.length <= 2) {
    program.help();
}
program.parse(process.argv);
//# sourceMappingURL=index.js.map