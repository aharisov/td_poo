import { TokenColor } from "./TokenColor";

export class Token {
    private color: TokenColor;

    constructor(color: TokenColor) {
        this.color = color;
    }

    get getColor(): TokenColor {
        return this.color;
    }
}