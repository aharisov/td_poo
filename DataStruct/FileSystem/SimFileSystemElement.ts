import { Type } from "./Type";

export abstract class SimFileSystemElement {
    title: string;
    type: Type;

    constructor(title: string, type: Type) {
        this.title = title;
        this.type = type;
    }

    public getTitle(): string {
        return this.title;
    }

    public getType(): Type {
        return this.type;
    }
}