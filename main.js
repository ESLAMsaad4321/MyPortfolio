let navMenu=document.getElementById("nav-menu"),
navClose=document.getElementById("nav-close"),
navToggle=document.getElementById("nav-toggle");

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
    })
}
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    })
}
const navLink=document.querySelectorAll(".nav-link");
function linkaction(){
    let navMenu=document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n=>n.addEventListener("click",linkaction));
let themeButton=document.querySelector("#theme-button");
let customizeTheme=document.querySelector(".customize-theme");
function opencustomizetheme(){
    customizeTheme.style.display=`grid`;
}
const closetheme=(e)=>{
    if(e.target.classList.contains(`customize-theme`)){
        customizeTheme.style.display=`none`;
    }
}
themeButton.addEventListener("click",opencustomizetheme);
customizeTheme.addEventListener("click",closetheme);
const fontSize =document.querySelectorAll(".choose-size span");
function removesizeselector(){
    fontSize.forEach(size=>size.classList.remove(`active`))
}
fontSize.forEach(size=>{
    

    size.addEventListener("click",()=>{
        let fontsize;
        removesizeselector();
        size.classList.add("active")
        if(size.classList.contains("font-size-1")){
            fontsize=`12px`
        }else if(size.classList.contains("font-size-2")){
            fontsize=`14px`
        }else if(size.classList.contains("font-size-3")){
            fontsize=`16px`
        }else if(size.classList.contains("font-size-4")){
            fontsize=`18px`
        }
        document.querySelector("html").style.fontSize=fontsize;
    })
})
const root = document.querySelector(":root");
const colorselect=document.querySelectorAll(".choose-color span");
function removecolorselector(){
    colorselect.forEach(color=>color.classList.remove(`active`))
}
colorselect.forEach(color=>{
    color.addEventListener("click",()=>{
        let primaryhue;
        removecolorselector();
        color.classList.add("active")
        if(color.classList.contains("font-color-1")){
            primaryhue=252;
        }else if(color.classList.contains("font-color-2")){
            primaryhue=52;
        }else if(color.classList.contains("font-color-3")){
            primaryhue=352;
        }else if(color.classList.contains("font-color-4")){
            primaryhue=152;
        }else if(color.classList.contains("font-color-5")){
            primaryhue=202;
        }
        root.style.setProperty(`--primary-color-hue`,primaryhue);
    })
})
let bg1=document.querySelector(".bg-1");

let bg2=document.querySelector(".bg-2");

let bg3=document.querySelector(".bg-3");

let darkColorLightness;

let lightColorLightness;

let whiteColorLightness;

const changeBg = ()=>{
    root.style.setProperty(`--dark-color-lightness`,darkColorLightness);
    root.style.setProperty(`--light-color-lightness`,lightColorLightness);
    root.style.setProperty(`--white-color-lightness`,whiteColorLightness);
}
bg1.addEventListener(`click`,()=>{
    bg1.classList.add(`active`);
    bg2.classList.remove(`active`);
    bg3.classList.remove(`active`);
    window.location.reload();
})
bg2.addEventListener(`click`,()=>{
    darkColorLightness=`95%`;
    lightColorLightness=`15%`;
    whiteColorLightness=`20%`;
    bg2.classList.add(`active`);
    bg1.classList.remove(`active`);
    bg3.classList.remove(`active`);
    changeBg();
})
bg3.addEventListener(`click`,()=>{
    darkColorLightness=`95%`;
    lightColorLightness=`0%`;
    whiteColorLightness=`10%`;
    bg3.classList.add(`active`);
    bg2.classList.remove(`active`);
    bg1.classList.remove(`active`);
    changeBg();
})