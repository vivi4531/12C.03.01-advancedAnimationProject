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

    startColorManipulation();
}

function startColorManipulation(){
    document.querySelectorAll(".g_to_interact_with").forEach((eachG)=>{
        console.log(eachG); 
        eachG.addEventListener("click", clickWantedColorArea);
        eachG.addEventListener("mouseover", mouseOverWantedColorArea);
        eachG.addEventListener("mouseout", mouseOutWantedColorArea);
    }); 

    document.querySelectorAll(".color_btn").forEach((each_btn)=>{
        console.log(each_btn); 
        each_btn.addEventListener("click", clickWantedColor);
    }); 
}

function clickWantedColorArea(){
    console.log("You have clicked the wanted color area"); 

    elementToPaint = this; 
    this.style.fill = "grey"; 
}

function mouseOverWantedColorArea(){
    console.log("You have moused over a color area"); 

    this.style.stroke = "black"; 
}

function mouseOutWantedColorArea(){
    console.log("You have moused out of a color area"); 

    this.style.stroke = "none"; 
}

function clickWantedColor(){
    console.log("You have clicked a color"); 

    if(elementToPaint != undefined){
        elementToPaint.style.fill = this.getAttribute("fill"); 
    }
}