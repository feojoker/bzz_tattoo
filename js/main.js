const
    buttonMap = document.querySelector(".map__btn"),
    map = document.querySelector(".map"),
    footer = document.getElementById("last"),
    logo = document.querySelector(".logo-mob"),
    menuPlace = document.getElementById("no-flex"),
    modalClient = document.getElementById("modal"),
    buttonClient = document.querySelectorAll(".client-btn"),
    buttonClientClose = document.querySelector(".w3-button");


// for mobile menu
const buttonMenu = document.getElementById('menuBtn'),
    menuContainer = document.getElementById('menuContainer');


function menu(event) {
    event.preventDefault();
    logo.classList.toggle("hide__logo");
    buttonMenu.classList.toggle("opened");
    menuContainer.classList.toggle("opened");
    menuPlace.classList.toggle("no__flex");
};

function client(event) {
    event.preventDefault();
    modalClient.classList.toggle("opened");
};


window.onclick = function (event) {
    if (event.target == modalClient) {
        modalClient.classList.toggle("opened");
    }
};

function anim() {
    footer.scrollIntoView(false);
    map.removeEventListener('transitionend', anim);
}

function scroll() {
    map.addEventListener('transitionend', anim);
    map.classList.toggle("is__open");
}

buttonMap.addEventListener("click", scroll);

buttonMenu.addEventListener("click", menu);

buttonClientClose.addEventListener("click", client);

for (const button of buttonClient) {
    button.addEventListener('click', client);
}
