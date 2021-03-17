"use strict"; 

//Model of all features 
const features = {
    stickerDramaqueen: false, 
    stickerHeart: false, 
    stickerRainbow: false, 
    phonegripButterfly: false, 
    phonegripHeart: false, 
    phonegripHalo: false
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

    document.querySelectorAll(".option").forEach(option=>option.addEventListener("click", toggleOption)); 
    startColorManipulation();
}

//Color configurator 
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

//Feature configurator
function toggleOption(event){
    const target = event.currentTarget; 
    const feature = target.dataset.feature; 

    //Toggle feature in model 
    features[feature] = !features[feature]; 
    if(features[feature] === true){
        //Select target and add chosen class
        target.classList.add("chosen"); 

        //Remove the hide class 
        document.querySelector(`[data-feature="${feature}"`).classList.remove("hide"); 

    } else {
        target.classList.remove("chosen"); 

        //Add the hide class 
        document.querySelector(`[data-feature="${feature}"`).classList.add("hide"); 
    }
}