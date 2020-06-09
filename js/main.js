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


//for instagram photos


let token = 'IGQVJYZAHc5bGVyaXJUT1B4S25HbkFxSGVDaU9jYXd6MTFxUktFM0VFRktRMm5NMzdTR2lQOGdWU0lRV0JkOFUxMnhXMmw5ZAjdwSFJDTXBwSEs2NzlIRGFmcGNzMmM5dktsd3Q5UXhkT1EtR0NRVF82SDRoT1VHMUlyUjRZA', // learn how to obtain it below
    userid = 17841410861352052, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 6; // how much photos do you want to get
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('.instagram').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
			// data.data[x].images.thumbnail.url - URL of image 150х150
			// data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL 
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});
