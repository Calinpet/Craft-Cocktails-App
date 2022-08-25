// making sure js is connected to html file
//alert("JS is loaded");

// making sure we have access to jquery in this file
//console.log($)

// 1) Page Loads - Fetch data from TheCocktailDB API
// 2) Store resulting data in a list (Array) so we can loop over and create the UI
// 3) Using the data to create UI and append to the DOM


/////////////////////
// CONSTANTS
/////////////////////

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

//////////////////////////
// APP'S STATE (variables)
//////////////////////////

////////////////////////////
// CACHED ELEMENTS REFERNCES
////////////////////////////
// instantiate the variables
const $strDrink = $('#strDrink'); 
const $strInstructions = $('#strInstructions'); 
const $form = $('form'); 
const $input = $('input[type="text"]'); 
///////////////////
// EVENT LISTENERS
///////////////////
// event listener to call data when user clicks the submit button
$form.on('submit', getDrinksData);
// let drinksData;

/////////////
// FUNCTIONS
/////////////
// this fuction will get data from the API
function getDrinksData(event){
// adding event.preventDefault to prevent the page from reloading
      event.preventDefault()
// user is equal to input
        let userInput = $input.val();
        if ( userInput === '') return;
// setting myDrinks equal to the result data
         $.ajax(URL + userInput)
          .then((data) => { 
           let myDrinks = data;
          render(myDrinks)  
      }
    );
}
// The rendering function with myDrinks parameters
  function render(myDrinks) {
      $strDrink.text(myDrinks.drinks[0].strDrink);
      $strInstructions.text(myDrinks.drinks[0].strInstructions);
      document.getElementById("picture").src = myDrinks.drinks[0].strDrinkThumb;
      console.log(myDrinks);  
  };

// Reached MVP



