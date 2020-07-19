var searchInputBtn = document.getElementById('gamesubmit')
var searchInputEl = document.getElementById('search-Input')
var platformDropdownEl = document.getElementById('platform-dropdown')
var nameEl = document.getElementById('name')
var platformEl = document.getElementById('platform')
var genreEl = document.getElementById('genre')
var scoreEl = document.getElementById('score')
var descriptionEl = document.getElementById('description')
//var platformDropdown = document.getElementById('platformtype')
var gameImageEl = document.getElementById('gameimage')


// API fetch from Chicken Coop which provides the game information
var getGameInfo = function(game, platform) {
    fetch("https://chicken-coop.p.rapidapi.com/games/" + game + "?platform=" + platform, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
		"x-rapidapi-key": "2dced9ba08msh3b63096614e89a5p18b302jsnd75e5b94f864"
	}
    })
        .then(response => {
        //console.log(response);
        if (response.ok) {
            response.json().then(data => {
                //console.log(data)
                displayGameInfo(data, game, platform)
            })
        }
        })
        .catch(err => {
	    console.log(err);
        });
}
// End Chicken Coop fetch

// Displays the information to the website
var displayGameInfo = function (game, searchTerm) {
    nameEl.textContent = ""
    nameEl.textContent = game.result.title
    platformEl.textContent = ""
    platformEl.textContent = platformDropdownEl.value
    genreEl.textContent = ""
    for (var i = 0; i < game.result.genre.length; i++) {
        genreEl.textContent = game.result.genre[i]
    }
    scoreEl.textContent = ""
    scoreEl.textContent = game.result.score
    descriptionEl.textContent = ""
    descriptionEl.textContent = game.result.description
    gameImageEl.setAttribute("src", "")
    gameImageEl.setAttribute("src", game.result.image)
}
// End display function

// Function that handles what happens when game name and platform submitted
var searchSubmitHandler = function(event) {
    event.preventDefault();
    var gameInput = searchInputEl.value.trim()
    var platformInput = platformDropdownEl.value.trim()
    if (gameInput && platformInput)
        getGameInfo(gameInput, platformInput)
        searchInputEl.value = ""
        //platformDropdownEl.value = ""
        grabGame();
}
// End submit handler

// Loads items saved to local storage

var gamenamels = localStorage.getItem("Game Name");
// console log variable gamenamels
// console.log("gamenamels", gamenamels);
// set the element with id="name"
// document.getElementById("name").innerHTML = gamenamels; 

var platformls = localStorage.getItem("platformdropdown");
// console log variable platformls
// console.log("platformls", platformls);
// set the element with id="platform"
// document.getElementById("platform").innerHTML = platformls; 

// get search input and console log it
// put searchinput into #name

// End load saved items

// this function runs when it is called on click of the submit button in the index.html file
function grabGame() {
    // this variable is = to the value of the element with id="searchInput"
    var searchInput = nameEl.value.trim();
    // console log variable searchInput
    // console.log("searchinupt", searchInput);
    // this sets the inner html of the element with id="name" to the variable searchInput
    // document.getElementById("name").innerHTML = searchInput;
    // this sets local storage with the key="Game Name" and value equal to the variable searchInput
    localStorage.setItem("Game Name", searchInput);


    var platformdropdown = platformEl.value.trim();
    // this variable is = to the value of the element with id="platform-dropdown"
    // console.log("platform-dropdown", platformdropdown);
    // console log variable platformdropdown
    //document.getElementById("platform").innerHTML = platformdropdown;
    // this sets the inner html of the element with id="platform" to the variable platformdropdown
    localStorage.setItem("platformdropdown", platformdropdown);
    // this sets local storage with the key="platformdropdown" and value equal to the variable platformdropdown


};


// Event listeners
searchInputBtn.addEventListener("click", searchSubmitHandler);

//getGameInfo("overwatch", "pc")