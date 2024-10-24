export abstract class Room {
    protected floor: number;
    protected area: number;

    constructor(floor: number, area: number) {
        this.floor = floor;
        this.area = area;
    }

    get getFloor(): number {
        return this.floor;
    }

    get getArea(): number {
        return this.area;
    }
}