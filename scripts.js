//grab Elements

//grab hambuger 
const hamburger = document.querySelector(".fa-bars")
console.log(hamburger)

//grab li's

const navList = document.querySelector(".nav-links")
console.log(navList)

const hamburgerFunction = () =>{
// When the hambuger is clicked make navbar visble and make hambuger disappear 
// hamburger.style.display = 'none'

if (navList.style.display === "none"){
    navList.style.display = "block"
    // What I expect is happening in the console but, it's not displaying as I thought 
}else{
    navList.style.display = "none"
}
console.log(navList)
}






