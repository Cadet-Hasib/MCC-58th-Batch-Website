const hamBurger=document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function(){
        document.querySelector(".navbar").classList.toggle("show")
});

// I have to fix the header.

window.onscroll=function(){
        const docScrollTop = document.documentElement.scrollTop;

        if(window.innerWidth>991){
                if (docScrollTop>100){
                       document.querySelector("header").classList.add("fixed") 
                }
                else{
                        document.querySelector("header").classList.remove("fixed")
                }
        }
}

function autoPlay(){
        if(autoSlide==slideDots-1){
                autoSlide=0;
        }
        else{
                autoSlide++;
        }
        changeSlide(autoSlide)
}
