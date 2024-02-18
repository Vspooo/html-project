let carousel;
carousel = document.querySelector(".carousel");
let arrowButton;
arrowButton = document.querySelectorAll(".wrap4>i")
let firstCardWeight;
firstCardWeight =  carousel.querySelector(".card").offsetWidth
let toggleButton;
toggleButton = document.querySelector(".toggle-btn");
let dropDownMenu;
dropDownMenu = document.querySelector(".dropDown-menu");

toggleButton.onclick = function () {
    dropDownMenu.classList.toggle("open")
}

const dragging = (e)=>{
    if (!isDragging)return;
    carousel.scrollLeft= startScrollLeft - (e.pageX - startX);
     carousel.classList.add("dragging");
}

const dragStart = (e) =>{
    isDragging = true;
    startX = e.pageX
    startScrollLeft =  carousel.scrollLeft
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
}

arrowButton.forEach( button =>{
    button.addEventListener("click", ()=>{
        carousel.scrollLeft += button.id === "left" ? -firstCardWeight:firstCardWeight;  // тут мені поміг інет і ютуб :) //
    })
})

let isDragging = false, startX, startScrollLeft;

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop)