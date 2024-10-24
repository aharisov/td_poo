import { Bathroom } from "./Bathroom";
import { Bedroom } from "./Bedroom";
import { Home } from "./Home";
import { Kitchen } from "./Kitchen";
import { LivingRoom } from "./LivingRoom";
import { WC } from "./WC";

const myHome = new Home();
// add and show bedrooms
myHome.addRoom(new Bedroom(1, 10, 1));
myHome.addRoom(new Bedroom(3, 12, 2));
console.log('Number of bedrooms :', myHome.getNbBedrooms(), '; beds :', myHome.getNbBeds());

// add kitchen
myHome.addRoom(new Kitchen(1, 8));
myHome.addRoom(new Kitchen(3, 12));

// add bathroom
myHome.addRoom(new Bathroom(1, 3, true));
myHome.addRoom(new Bathroom(3, 5, true));

// add wc
myHome.addRoom(new WC(1, 3));

// add living room and show living area
myHome.addRoom(new LivingRoom(1, 20, true));
myHome.addRoom(new LivingRoom(3, 24, false));
console.log('Living are:', myHome.getLivingArea());

// show floor area
console.log('Area of the 1st floor: ', myHome.getFloorArea(1));
console.log('Area of the 3rd floor: ', myHome.getFloorArea(3));

// show total area
console.log('Total area:', myHome.getTotalArea());

// show wc number
console.log('Total WC number:', myHome.getNbWC());

// show tv number
console.log('Total TW number:', myHome.getNbTV());