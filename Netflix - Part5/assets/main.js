
window.onload = RandomImage;

let image_array1 = ["assets/Logo/act1.jpg", 
"assets/Logo/act2.jpg",
"assets/Logo/act3.jpg",
"assets/Logo/act4.jpg",
"assets/Logo/act5.jpg", 
"assets/Logo/act6.jpg"] 

function RandomImage(){ 
    var index = Math.floor(Math.random()*image_array.length)              
    document.getElementById("random").src = image_array[index];         
}