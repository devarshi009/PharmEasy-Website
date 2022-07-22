let imagesLink=[
    "https://cms-contents.pharmeasy.in/banner/7d22c648435-200.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/3f636edf697-GRAND1000_Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/f9f04ebe8e7-Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/4a92d1f76bf-Get_end_to_end.jpg?dim=1440x0&dpr=1&q=100",

    ]
let leftBtn=document.getElementById("left-btn");
let rightBtn=document.getElementById("right-btn");
 let crauser=document.getElementById("crauser");
 let imageState=0;
 rightBtn.addEventListener("click",function(){
    imageState++;
    if(imageState===imagesLink.length){
        imageState=0;
    }
    crauser.src=imagesLink[imageState]
 })
 leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imagesLink.length-1
    }
    crauser.src=imagesLink[imageState]
 })