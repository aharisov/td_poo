import { Room } from "./Room";

export class LivingRoom extends Room {
    private hasTV: boolean;

    constructor(floor: number, area: number, hasTV: boolean) {
        super(floor, area);
        this.hasTV = hasTV;
    }

    get getHasTV(): boolean {
        return this.hasTV;
    }
}