import * as fs from 'fs-extra';
import * as path from 'path';
import { 
  componentTemplate, 
  typesTemplate, 
  stylesTemplate, 
  storiesTemplate, 
  mockDataTemplate 
} from './templates';

export interface GeneratorOptions {
  componentName: string;
  outputPath: string;
}

export class ComponentGenerator {
  private componentName: string;
  private outputPath: string;
  private componentDir: string;

  constructor(options: GeneratorOptions) {
    this.componentName = options.componentName;
    this.outputPath = options.outputPath;
    this.componentDir = path.join(this.outputPath, 'components', this.componentName);
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private validateComponentName(): void {
    if (!this.componentName || this.componentName.trim() === '') {
      throw new Error('Component name is required');
    }

    if (!/^[A-Za-z][A-Za-z0-9]*$/.test(this.componentName)) {
      throw new Error('Component name must start with a letter and contain only letters and numbers');
    }
  }

  private async ensureDirectoryExists(): Promise<void> {
    try {
      await fs.ensureDir(this.componentDir);
    } catch (error) {
      throw new Error(`Failed to create directory: ${this.componentDir}`);
    }
  }

  private async checkIfComponentExists(): Promise<void> {
    const exists = await fs.pathExists(this.componentDir);
    if (exists) {
      const files = await fs.readdir(this.componentDir);
      if (files.length > 0) {
        throw new Error(`Component "${this.componentName}" already exists at ${this.componentDir}`);
      }
    }
  }

  private async generateFile(fileName: string, content: string): Promise<void> {
    const filePath = path.join(this.componentDir, fileName);
    try {
      await fs.writeFile(filePath, content, 'utf8');
      console.log(`✅ Created: ${fileName}`);
    } catch (error) {
      throw new Error(`Failed to create file: ${fileName}`);
    }
  }

  public async generate(): Promise<void> {
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
        this.generateFile(`${this.componentName}.tsx`, componentTemplate(this.componentName)),
        this.generateFile(`${this.componentName}Types.ts`, typesTemplate(this.componentName)),
        this.generateFile(`${this.componentName}.styles.ts`, stylesTemplate(this.componentName)),
        this.generateFile(`${this.componentName}.stories.ts`, storiesTemplate(this.componentName)),
        this.generateFile(`${this.componentName}.mock.data.ts`, mockDataTemplate(this.componentName)),
      ]);

      console.log(`\n🎉 Successfully generated ${this.componentName} component!`);
      console.log(`📂 Location: ${this.componentDir}`);
      console.log(`\nFiles created:`);
      console.log(`  • ${this.componentName}.tsx`);
      console.log(`  • ${this.componentName}Types.ts`);
      console.log(`  • ${this.componentName}.styles.ts`);
      console.log(`  • ${this.componentName}.stories.ts`);
      console.log(`  • ${this.componentName}.mock.data.ts`);

    } catch (error) {
      console.error(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      throw error;
    }
  }
}
