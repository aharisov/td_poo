import { SimFile } from "./SimFile";
import { SimFileSystemElement } from "./SimFileSystemElement";
import { Type } from "./Type";

export class SimDirectory extends SimFileSystemElement {
    private folders: SimDirectory[];
    private files: SimFile[];
    private parent: SimDirectory | undefined;

    constructor(title: string, type: Type, parent: SimDirectory | undefined) {
        super(title, type);
        this.folders = [];
        this.files = [];
        this.parent = parent;
    }

    public getFolders(): SimDirectory[] {
        return this.folders;
    }

    public getFiles(): SimFile[] {
        return this.files;
    }

    public addFolder(child: SimDirectory): void {
        this.folders.push(child);
    }

    public addFile(child: SimFile): void {
        this.files.push(child);
    }

    public removeElement(title: string): void {
        let tmpFolders: SimDirectory[] = [];
        let tmpFiles: SimFile[] = [];
        tmpFolders = this.folders.filter(el => el.getTitle() != title);
        tmpFiles = this.files.filter(el => el.getTitle() != title);

        if (tmpFolders.length > 0) {
            this.folders = tmpFolders;
        }

        if (tmpFiles.length > 0) {
            this.files = tmpFiles;
        }
    }
}