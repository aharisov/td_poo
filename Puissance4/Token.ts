export class Token {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    get getColor(): string {
        return this.color;
    }
}