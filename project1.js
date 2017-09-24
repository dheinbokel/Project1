/**
 *   @author Heinbokel, Doug (dheinbokel@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary #10 pg. 84 word problem || created: 09.23.2017
 *   @todo Nothing
 */


const PROMPT = require('readline-sync');

let lotNum, numBed, numBath, numCars, totalPrice;
const basePrice = 50000, bedroom = 17000, bathroom = 12500, cars = 6000;

/**
 *   @method
 *   @desc dispatch method for this project
 *   @returns (null)
 */

function main(){
    getDetails();
    setTotal();
    displayPrice();
}

main();

/**
 *   @method
 *   @desc gets all the details needed for the house price from the user
 *   @returns (null)
 */

function getDetails() {
    lotNum = Number(PROMPT.question("\nWhat lot number in River Falls will you choose? "));
    numBed = Number(PROMPT.question("\nHow many bedrooms in the home? "));
    numBath = Number(PROMPT.question("\nHow many bathrooms in the home? "));
    numCars = Number(PROMPT.question("\nHow many cars should the garage hold? "));
}

/**
 *   @method
 *   @desc calculates the total price of the house
 *   @returns (null)
 */

function setTotal() {
    totalPrice = (numBed * bedroom)+(numBath * bathroom)+(numCars * cars)+basePrice;
}

/**
 *   @method
 *   @desc displays the final price at the lot number
 *   @returns (null)
 */

function displayPrice() {
    console.log(`\nYour new home at lot number ${lotNum} will cost \$${totalPrice}`);
}