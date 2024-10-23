import { Room } from "./Room";
import { Bedroom } from "./Bedroom";
import { LivingRoom } from "./LivingRoom";
import { Kitchen } from "./Kitchen";
import { Bathroom } from "./Bathroom";

export class Home {
    private readonly rooms: Room[] = [];

    addRoom(room: Room): void {
        this.rooms.push(room);    
    }

    getTotalArea(): number {
        let cntArea: number = 0;

        this.rooms.forEach(room => {
            cntArea += room.getArea;
        })

        return cntArea;
    }

    getFloorArea(floor: number): number {
        let rooms: Room[] = this.rooms.filter(room => room.getFloor == floor);
        let cntArea: number = 0;

        rooms.forEach(room => {
            cntArea += room.getArea;
        })
        
        return cntArea;
    }

    getLivingArea(): number {
        let cntLivingArea: number = 0;
        let bedrooms: Bedroom[] = this.rooms.filter(room => room instanceof Bedroom);
        let livingRooms: LivingRoom[] = this.rooms.filter(room => room instanceof LivingRoom);

        livingRooms.forEach(room => {
            cntLivingArea += room.getArea;
        })

        bedrooms.forEach(room => {
            cntLivingArea += room.getArea;
        })

        return cntLivingArea;
    }

    getNbBedrooms(): number {
        return this.rooms.filter(room => room instanceof Bedroom).length;
    }
}

const home = new Home();
// add and show bedrooms
home.addRoom(new Bedroom(1, 10));
home.addRoom(new Bedroom(3, 12));
console.log('Number of bedrooms:', home.getNbBedrooms());

// add kitchen
home.addRoom(new Kitchen(1, 8));
home.addRoom(new Kitchen(3, 12));

// add bathroom
home.addRoom(new Bathroom(1, 3));
home.addRoom(new Bathroom(3, 5));

// add living room and show living area
home.addRoom(new LivingRoom(1, 20));
home.addRoom(new LivingRoom(3, 24));
console.log('Living are:', home.getLivingArea());

// show floor area
console.log('Area of the 1st floor: ', home.getFloorArea(1));
console.log('Area of the 3rd floor: ', home.getFloorArea(3));

// show total area
console.log('Total area:', home.getTotalArea());
