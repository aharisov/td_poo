import { SimDirectory } from "./SimDirectory";
import { SimFileSystemElement } from "./SimFileSystemElement";
import { Type } from "./Type";

export class SimFile extends SimFileSystemElement {
    private parent: SimDirectory | undefined;

    constructor(title: string, type: Type, parent: SimDirectory | undefined) {
        super(title, type);
        this.parent = parent;
    }

}