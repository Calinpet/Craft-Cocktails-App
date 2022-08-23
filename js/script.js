// making sure js is connected to html file
//alert("JS is loaded");

// making sure we have access to jquery in this file
//console.log($)

// 1) Page Loads - Fetch data from TheCocktailDB API
// 2) Store resulting data in a list (Array) so we can loop over and create the UI
// 3) Using the data ti create UI and append to the DOM


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

const $strDrink = $('#strDrink'); 
const $strInstructions = $('strInstructions'); 
const $form = $('form'); 
const $input = $('input[type="text"]'); 
///////////////////
// EVENT LISTENERS
///////////////////
$form.on('submit', getDrinksData);
// let drinksData;

/////////////
// FUNCTIONS
/////////////

function getDrinksData(event){

      event.preventDefault()

        let userInput = $input.val();
        if ( userInput === '') return;
          
         $.ajax(URL + userInput)
          .then((data) => { 
           myDrinks = data;
          render()  
            // $('main').append(`<img src="${myDrinks.drinks.strDrinkThumb}" />`);
      });
}

//.
function render() {
    $strDrink.text(myDrinks.strDrink);
    $strInstructions.text(myDrinks.strInstructions);
    console.log(myDrinks);  
  };





