const buttonClient = document.querySelector(".navigation__btn"),
    modalClient = document.querySelector(".site__navigation"),
    buttonMap = document.querySelector(".map__btn"),
    map = document.querySelector(".map"),
    footer = document.getElementById("last"),
    logo = document.querySelector(".logo-mob"),
    menuPlace = document.getElementById("no-flex");


const menuBtn = document.getElementById('menuBtn'),
    menuContainer = document.getElementById('menuContainer');


function client (event) {
    event.preventDefault();
    logo.classList.toggle("hide__logo");
    menuBtn.classList.toggle("opened");
    menuContainer.classList.toggle("opened");
    menuPlace.classList.toggle("no__flex");
};



// menuBtn.onclick = function () {
//     if (menuBtn.className == menuIconClosed) {
//         menuBtn.className = menuIconOpened;
//         menuContainer.className = menuContOpened;
//     } else if (menuBtn.className == menuIconOpened) {
//         menuBtn.className = menuIconClosed;
//         menuContainer.className = menuContClosed;
//     }
// }








function anim() {
    footer.scrollIntoView(false);
    map.removeEventListener('transitionend', anim);
}



function scroll() {
    map.addEventListener('transitionend', anim);
    map.classList.toggle("is__open");
}


buttonMap.addEventListener("click", scroll);

menuBtn.addEventListener("click", client);




// async function scroll() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("готово!"), 1000)
//     });

//     let result = await promise; // будет ждать, пока промис не выполнится (*)

//     alert(result); // "готово!"
// }

// f();