import { Room } from "./Room";

export class Bathroom extends Room {
    private hasWC: boolean;

    constructor(floor: number, area: number, hasWC: boolean) {
        super(floor, area);
        this.hasWC = hasWC;
    }

    get getHasWC(): boolean {
        return this.hasWC;
    }
}