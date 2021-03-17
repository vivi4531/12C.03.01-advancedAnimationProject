"use strict"; 

//Model of all features 
const features = {
    stickerDramaqueen: false, 
    stickerHeart: false, 
    stickerRainbow: false 
}; 

//Global variable
let elementToPaint; 

window.addEventListener("DOMContentLoaded", init); 

async function init(){
    console.log("It works 👍🏻"); 

    //Fetch svg 
    let response = await fetch ("iphone_basic.svg"); 
    let mySvgData = await response.text(); 
    document.querySelector("#iphone-basic").innerHTML = mySvgData; 
}