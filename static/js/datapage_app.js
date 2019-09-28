// referring to the data from data.js
var year=2018

// YOUR CODE HERE!
//select the table body using d3
var tbody = d3.select("tbody");
//console.log(data);


function loadfrom_getData(year) {
    var getdataURL = "/getdata/" + String(year);
    d3.json(getdataURL, function (data) {
    console.log(data)
    console.log("Inside load Year="+ year)
    
    tableData=data;
    happinessTable(tableData)
      });
      

}


//creating a function (happinessTable) to construct the table
function happinessTable(data) {

    

    tableData=data;
    tbody.html("");

// Step 1: Loop Through `data` and console.log each data object
data.forEach(function(happinessData) {
    console.log("insidehappinessTable")
    // console.log(happinessData);

// Step 2:  Use d3 to append one table row `tr` for each data object
    var row = tbody.append("tr");
// Step 3:  Use `Object.entries` to console.log each data value
    Object.entries(happinessData).forEach(function([key, value]) {
        //console.log(key, value);
// Step 4: Use d3 to append 1 cell per data value (date, city, state, country, shape, duration, comments)
    var cell = row.append("td");
    cell.text(value);
 });
});
}

//create a function (filterCountry) for filtering the table using a date input from user
function filterCountry() {
    var inputCountry = d3.select("#Country");
    console.log("insidefiltercountry")
    var userInput = inputCountry.property("value");

    var inputCountryValue = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    
      console.log(inputCountryValue);

 if (inputCountryValue) {
    var filteredData = tableData.filter(row => row.Country === inputCountryValue);
    console.log(filteredData.length);
    
//if else to return an alert message incase no data is retrieved for the date entered.
    if (filteredData.length) {
   
        console.log("inputCountryEntered");
        // console.log(filteredData);
         happinessTable(filteredData);
    }
else {
    alert("No Data found for the entered country. Try another country");
}
 }
 //Alert the user to enter a date before filtering
 else {
     alert("Please enter a country name to filter");
 }

}

//select the filter button & call it if there is a click action identified.

function onFilterClick(CountryName){
var filterbutton = d3.select("#filter-btn");
console.log(CountryName)
//filterbutton.on("click", filterCountry);
filterCountry(CountryName);
};

function onFilterbyYearClick(user_year){
    year=user_year
console.log("Inside onFilterbyYearClick");
console.log("onFilterbyYearClick year=" + year);

if (year==2015){
    
loadfrom_getData(2015)

}
else if (year==2016){
    
    
    loadfrom_getData(2016)

}
else if (year==2017){
    
   
    loadfrom_getData(2017)

}
else if (year==2018){
    
   
    loadfrom_getData(2018)

}
}
var tableData = data_2018;
//happinessTable(tableData);

console.log("Last Line");

loadfrom_getData(2018);



