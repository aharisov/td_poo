import { Room } from "./Room";
import { Bedroom } from "./Bedroom";
import { LivingRoom } from "./LivingRoom";
import { Bathroom } from "./Bathroom";
import { WC } from "./WC";

export class Home {
    private rooms: Room[];

    constructor() {
        this.rooms = [];
    }

    public addRoom(room: Room): void {
        this.rooms.push(room);    
    }

    public countRooms(needle: any = Room): number {
        let cnt: number = 0;

        for (let room of this.rooms) {
            if (room instanceof needle) {
                cnt++;
            }
        }

        return cnt;
    }

    public getTotalArea(): number {
        let cntArea: number = 0;

        for (let room of this.rooms) {
            cntArea += room.getArea;
        }

        return cntArea;
    }

    public getFloorArea(floor: number): number {
        let cntArea: number = 0;

        for (let room of this.rooms) {
            if (room.getFloor == floor) {
                cntArea += room.getArea;
            }
        }
        
        return cntArea;
    }

    public getLivingArea(): number {
        let cntLivingArea: number = 0;

        for (let room of this.rooms) {
            if (room instanceof Bedroom || room instanceof LivingRoom) {
                cntLivingArea += room.getArea;
            }
        }

        return cntLivingArea;
    }

    public getNbBedrooms(): number {
        return this.countRooms(Bedroom);
    }

    public getNbWC(): number {
        let countWC: number = 0;

        for (let room of this.rooms) {
            if (room instanceof WC || (room instanceof Bathroom && room.getHasWC)) {
                countWC++;
            }
        }

        return countWC;
    }

    public getNbTV(): number {
        let cntTV: number = 0;
        
        for (let room of this.rooms) {
            if (room instanceof LivingRoom && room.getHasTV) {
                cntTV++;
            }
        }

        return cntTV;
    }

    public getNbBeds(): number {
        let cnt: number = 0;
        
        for (let room of this.rooms) {
            if (room instanceof Bedroom && room.getBeds) {
                cnt += room.getBeds;
            }
        }

        return cnt;
    }
}