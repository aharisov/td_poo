import { Room } from "./Room";
import { Bedroom } from "./Bedroom";
import { LivingRoom } from "./LivingRoom";
import { Kitchen } from "./Kitchen";
import { Bathroom } from "./Bathroom";
import { WC } from "./WC";

export class Home {
    private readonly rooms: Room[] = [];

    public addRoom(room: Room): void {
        this.rooms.push(room);    
    }

    public countRooms(rooms: Room[], needle: any): number {
        let cnt: number = 0;

        rooms.forEach(room => {
            if (room instanceof needle) {
                cnt++;
            }
        })

        return cnt;
    }

    public createRoomsArr(rooms: Room[], needle: any): any[] {
        let arr: any[] = [];

        rooms.forEach(room => {
            if (room instanceof needle) {
                arr.push(room);
            }
        })

        return arr;
    }

    public getTotalArea(): number {
        let cntArea: number = 0;

        this.rooms.forEach(room => {
            cntArea += room.getArea;
        })

        return cntArea;
    }

    public getFloorArea(floor: number): number {
        let rooms: Room[] = this.rooms.filter(room => room.getFloor == floor);
        let cntArea: number = 0;

        rooms.forEach(room => {
            cntArea += room.getArea;
        })
        
        return cntArea;
    }

    public getLivingArea(): number {
        let cntLivingArea: number = 0;
        // let bedrooms: Bedroom[] = this.rooms.filter(room => room instanceof Bedroom);
        // let livingRooms: LivingRoom[] = this.rooms.filter(room => room instanceof LivingRoom);
        let bedrooms: Bedroom[] = this.createRoomsArr(this.rooms, Bedroom);
        let livingRooms: LivingRoom[] = this.createRoomsArr(this.rooms, LivingRoom);

        livingRooms.forEach(room => {
            cntLivingArea += room.getArea;
        })

        bedrooms.forEach(room => {
            cntLivingArea += room.getArea;
        })

        return cntLivingArea;
    }

    public getNbBedrooms(): number {
        // return this.rooms.filter(room => room instanceof Bedroom).length;
        return this.countRooms(this.rooms, Bedroom);
    }

    public getNbWC(): number {
        // let countWC: number = this.rooms.filter(room => room instanceof WC).length;
        let countWC: number = this.countRooms(this.rooms, WC);

        // let countBathWC: number = this.rooms.filter(room => room instanceof Bathroom && room.getHasWC).length;
        let countBathWC: number = 0;

        this.rooms.forEach(room => {
            if (room instanceof Bathroom && room.getHasWC) {
                countBathWC++;
            }
        })

        return countWC + countBathWC;
    }

    public getNbTV(): number {
        let livingRooms: LivingRoom[] = this.createRoomsArr(this.rooms, LivingRoom);
        let cntTV: number = 0;
        
        livingRooms.forEach(room => {
            if (room.getHasTV) {
                cntTV++;
            }
        })

        return cntTV;
    }
}

const home = new Home();
// add and show bedrooms
home.addRoom(new Bedroom(1, 10, 1));
home.addRoom(new Bedroom(3, 12, 2));
console.log('Number of bedrooms:', home.getNbBedrooms());

// add kitchen
home.addRoom(new Kitchen(1, 8));
home.addRoom(new Kitchen(3, 12));

// add bathroom
home.addRoom(new Bathroom(1, 3, true));
home.addRoom(new Bathroom(3, 5, true));

// add wc
home.addRoom(new WC(1, 3));

// add living room and show living area
home.addRoom(new LivingRoom(1, 20, true));
home.addRoom(new LivingRoom(3, 24, false));
console.log('Living are:', home.getLivingArea());

// show floor area
console.log('Area of the 1st floor: ', home.getFloorArea(1));
console.log('Area of the 3rd floor: ', home.getFloorArea(3));

// show total area
console.log('Total area:', home.getTotalArea());

// show wc number
console.log('Total WC number:', home.getNbWC());

// show tv number
console.log('Total TW number:', home.getNbTV());