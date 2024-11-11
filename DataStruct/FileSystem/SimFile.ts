import { SimFileSystemElement } from "./SimFileSystemElement";
import { Type } from "./Type";

export class SimFile extends SimFileSystemElement {
    constructor(title: string, type: Type) {
        super(title, type);
    }
}