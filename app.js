const heading = document.querySelector(".mainLanding h1");
const image = document.querySelector(".mainLanding img");
const cards = document.querySelectorAll(".cards li");
console.log(cards);


window.addEventListener("scroll",()=>{
    let scrollPosition = window.pageYOffset;
    // console.log(scrollPosition);
    heading.style.transform = `translateY(${-scrollPosition * 0.2}px)`;
    heading.style.opacity = `${(275-scrollPosition)*0.01 - (275 - scrollPosition)*0.005}`;
    image.style.transform = `translateY(${scrollPosition*.3}px)`;

    cards.forEach((card,index)=>{
        console.log(scrollPosition*0.005-index);
        card.style.opacity = `${scrollPosition*0.005-index*0.003}`;
        card.style.transition = `opacity 0.5s ${index/10}s ease-in forwards`
    });

});
