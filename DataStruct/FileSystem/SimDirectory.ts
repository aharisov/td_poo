import { SimFile } from "./SimFile";
import { SimFileSystemElement } from "./SimFileSystemElement";
import { Type } from "./Type";

export class SimDirectory extends SimFileSystemElement {
    files: SimFile[];

    constructor(title: string, type: Type) {
        super(title, type);
        this.files = [];
    }

    public addFile(file: SimFile): void {
        this.files.push(file);
    }
}