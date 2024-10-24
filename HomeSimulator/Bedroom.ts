import { Room } from "./Room";

export class Bedroom extends Room {
    private beds: number;

    constructor(floor: number, area: number, beds: number) {
        super(floor, area);
        this.beds = beds;
    }

    get getBeds(): number {
        return this.beds;
    }
}