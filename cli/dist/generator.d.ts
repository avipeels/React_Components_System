export interface GeneratorOptions {
    componentName: string;
    outputPath: string;
}
export declare class ComponentGenerator {
    private componentName;
    private outputPath;
    private componentDir;
    constructor(options: GeneratorOptions);
    private capitalizeFirstLetter;
    private validateComponentName;
    private ensureDirectoryExists;
    private checkIfComponentExists;
    private generateFile;
    generate(): Promise<void>;
}
//# sourceMappingURL=generator.d.ts.map