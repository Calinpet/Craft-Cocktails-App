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
let getDrinks;
//////////////////////////
// APP'S STATE (variables)
//////////////////////////

////////////////////////////
// CACHED ELEMENTS REFERNCES
////////////////////////////

// const $strDrink = $('#strDrink'); 
// const $strInstructions = $('strInstructions'); 
// const $form = $('form'); 
// const $input = $(`input[type="text"]`); 

///////////////////
// EVENT LISTENERS
///////////////////

/////////////
// FUNCTIONS
/////////////

$.ajax("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
.then(function(data) { 
  myDrinks = data;
  render()  
});

//.
function render() {
  console.log(myDrinks);

  const html = myDrinks.map(function(drinks) {
        return 
    });
  }





