
function videoslider(links){
    document.querySelector('.slider').src=links
}

var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    } 
},3000);

// --------project-------
const navToggler = document.querySelector(".Raw");
navToggler.addEventListener("click",()=>{
    hideSection();
    toggleNavbar();
    
})
function hideSection(){
    document.querySelector("section.lesson").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".modify").classList.toggle("lesson");
}

// ----------home----------
const anotherToggler =document.querySelector(".Raw1")
anotherToggler.addEventListener("click",()=>{
    anotherSection();
    anotherNavbar();
})

function anotherSection(){
    document.querySelector("section.lesson").classList.toggle("fade-out");
}

function anotherNavbar()
{
    document.querySelector(".Summury").classList.toggle("lesson");
}


const contact = document.querySelector(".any");
contact.addEventListener("click",()=>{
    alert("Your registration is succesfully")
});

