#!/usr/bin/env node

import { Command } from 'commander';
import * as path from 'path';
import chalk from 'chalk';
import { ComponentGenerator } from './generator';

const program = new Command();

program
  .name('generate-component')
  .description('CLI tool to generate React component files with TypeScript, Storybook, and styled-components')
  .version('1.0.0');

program
  .argument('<component-name>', 'Name of the component to generate')
  .option('-o, --output <path>', 'Output directory path', process.cwd())
  .description('Generate a new React component with all necessary files')
  .action(async (componentName: string, options: { output: string }) => {
    try {
      console.log(chalk.blue('🔧 React Component Generator'));
      console.log(chalk.gray('================================\n'));

      const generator = new ComponentGenerator({
        componentName,
        outputPath: path.resolve(options.output),
      });

      await generator.generate();

      console.log(chalk.green('\n✨ Component generation completed successfully!'));
      console.log(chalk.gray('\nNext steps:'));
      console.log(chalk.gray('1. Import and use your component in your application'));
      console.log(chalk.gray('2. Run Storybook to see your component in action'));
      console.log(chalk.gray('3. Customize the component styles and functionality'));

    } catch (error) {
      console.error(chalk.red('\n❌ Generation failed:'));
      console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
      process.exit(1);
    }
  });

// Handle cases where no arguments are provided
if (process.argv.length <= 2) {
  program.help();
}

program.parse(process.argv);
