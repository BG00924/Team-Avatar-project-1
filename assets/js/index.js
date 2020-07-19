var searchInput = document.getElementById('gamesubmit')

var searchSubmitHandler = function(event) {
    event.preventDefault();
    grabGame();


}


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

// this function runs when it is called on click of the submit button in the index.html file
function grabGame() {
    // this variable is = to the value of the element with id="searchInput"
    var searchInput = document.getElementById("search-Input").value;
    // console log variable searchInput
    // console.log("searchinupt", searchInput);
    // this sets the inner html of the element with id="name" to the variable searchInput
    // document.getElementById("name").innerHTML = searchInput;
    // this sets local storage with the key="Game Name" and value equal to the variable searchInput
    localStorage.setItem("Game Name", searchInput);


    var platformdropdown = document.getElementById("platform-dropdown").value;
    // this variable is = to the value of the element with id="platform-dropdown"
    // console.log("platform-dropdown", platformdropdown);
    // console log variable platformdropdown
    document.getElementById("platform").innerHTML = platformdropdown;
    // this sets the inner html of the element with id="platform" to the variable platformdropdown
    localStorage.setItem("platformdropdown", platformdropdown);
    // this sets local storage with the key="platformdropdown" and value equal to the variable platformdropdown


};


searchInput.addEventListener("submit", searchSubmitHandler);

