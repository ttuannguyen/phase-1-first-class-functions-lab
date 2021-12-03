// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
//console.log(drivers.splice(0, 2));
//console.log(drivers);

const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
} 

const returnLastTwoDrivers = function() {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = number => function() {
        return number ** 2;
    }
 
const fareDoubler = createFareMultiplier => createFareMultiplier * 2;

const fareTripler = createFareMultiplier => createFareMultiplier * 3;

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(arrayOfDrivers);
}
