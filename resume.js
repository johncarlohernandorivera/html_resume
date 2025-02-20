document.addEventListener("DOMContentLoaded", function(){
    const slideInElements =document.querySelectorAll("#experience");

    function checkSlide(){
        slideInElements.forEach(slideInElements=>{
            const slideInAt =window.scrollY + window.innerHeight-slideInElements.clientHeight/2;
            const elementBottom= slideInElements.offsetTop +slideInElements.clientHeight;
            const isHalfShown =slideInAt>slideInElements.offsetTop;
            const isNotScrolledPast = window.scrollY<elementBottom;

            if(isHalfShown && isNotScrolledPast){
                slideInElements.classList.add("active");
            } else{
                slideInElements.classList.remove("active");
            }
        });
    }
    window.addEventListener("scroll",checkSlide);
});