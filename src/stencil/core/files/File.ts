import { ModularSystemTransfer } from '../modular';

export interface FileSignature {
    getName: () => string;
    getNameWithExtension: () => string;
    getContent: () => string;
}

export abstract class File<Extension> extends ModularSystemTransfer implements FileSignature {
    name: string;
    extension: Extension;
    constructor(name: string, extension: Extension) {
        super();
        this.name = name;
        this.extension = extension;
    }

    getName() {
        return this.name;
    }

    getNameWithExtension() {
        return `${this.name}.${this.extension}`;
    }

    abstract getContent(): string;
}
