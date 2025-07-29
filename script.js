let img5 = document.querySelector("#img11");
let fifthimgslidertest1 = document.querySelector("#fifthimgslidertest1")
let fifthimgslidertest2 = document.querySelector("#fifthimgslidertest2")
let fifthimgslidertest3 = document.querySelector("#fifthimgslidertest3")
let fifthimgslidertest4 = document.querySelector("#fifthimgslidertest4")
img5.addEventListener("mouseover", () => {
    fifthimgslidertest1.classList.add("onhover");
    fifthimgslidertest1.classList.remove("onnothover");
})
img5.addEventListener("mouseout", () => {
    fifthimgslidertest1.classList.add("onnothover");
    fifthimgslidertest1.classList.remove("onhover");
})
let img6 = document.querySelector("#img22");
img6.addEventListener("mouseover", () => {
    fifthimgslidertest2.classList.add("onhover");
    fifthimgslidertest2.classList.remove("onnothover");
})
img6.addEventListener("mouseout", () => {
    fifthimgslidertest2.classList.add("onnothover");
    fifthimgslidertest2.classList.remove("onhover");
})
let img7 = document.querySelector("#img33");
    img7.addEventListener("mouseover", () => {
    fifthimgslidertest3.classList.add("onhover");
    fifthimgslidertest3.classList.remove("onnothover");
    
})
img7.addEventListener("mouseleave", () => {
    fifthimgslidertest3.classList.add("onnothover");
    fifthimgslidertest3.classList.remove("onhover");
})
let img8 = document.querySelector("#img44");
    img8.addEventListener("mouseover", () => {
    fifthimgslidertest4.classList.add("onhover");
    fifthimgslidertest4.classList.remove("onnothover");
    
})
img8.addEventListener("mouseleave", () => {
    fifthimgslidertest4.classList.add("onnothover");
    fifthimgslidertest4.classList.remove("onhover");
})

let menulogo = document.querySelector("#menulogo");
let navclose = document.querySelector("#navclose");
let navbar = document.querySelector("#navbar");
menulogo.addEventListener("click",() => {
    navbar.classList.add("navopenclass");
    navbar.classList.remove("navcloseclass");
} )
navclose.addEventListener("click",() => {
    navbar.classList.add("navcloseclass");
    navbar.classList.remove("navopenclass");
} )
let enrollnow = document.querySelector("#enrollnow");
let closebutton = document.querySelector("#closebutton");
let enquirenowsection = document.querySelector("#enquirenowsection");
enrollnow.addEventListener("click",() => {
    enquirenowsection.classList.add("navopenclass1");
    enquirenowsection.classList.remove("navcloseclass1");
} )
closebutton.addEventListener("click",() => {
    enquirenowsection.classList.add("navcloseclass1");
    enquirenowsection.classList.remove("navopenclass1");
} )



