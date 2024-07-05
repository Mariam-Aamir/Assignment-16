"use strict";
//    Assignmeny 16
// add more guest for dinner in guestlist
let guestList = ["Aisha", "maheen", "saba", "nasra", "Mariam Aamir"];
// print message to  inform your guest that place is bigger now many people is invited
console.log("Great news my Dear Friends ,I arange the the bigger table for dinner");
//add new guest in the beginning of your array using un shift meathod
guestList.unshift("sonia");
//add new guest in the middle and end of your array list and use append to add new guest 
//splice() add name in middle in list
guestList.splice(Math.floor(guestList.length / 2), 0, "sidra");
//push to add name  last in list
guestList.push("salma");
//print a new  invitation message
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited Dinner `);
});
