$(function () {
    $('.navigation__btn').on('click', function () {
        $('.site__navigation').slideToggle();
    });

});

const buttonMap = document.querySelector(".map__btn");
const map = document.querySelector(".map");
const footer = document.getElementById("last");

// function toggleModal() {
//     map.classList.toggle("is__open");
//     setTimeout(scroll, 100);
//     footer.scrollIntoView();
// }

// buttonMap.addEventListener("click", toggleModal);

function anim() {
    footer.scrollIntoView(false);
    map.removeEventListener('transitionend', anim);
    console.log("dsad");
}



function scroll() {
    map.addEventListener('transitionend', anim);
    map.classList.toggle("is__open");
}


buttonMap.addEventListener("click", scroll);




// async function scroll() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("готово!"), 1000)
//     });

//     let result = await promise; // будет ждать, пока промис не выполнится (*)

//     alert(result); // "готово!"
// }

// f();