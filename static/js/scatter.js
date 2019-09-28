console.log("First Line Scatter");
var xAxis = 'Freedom'
var yAxis = 'Trust'
var markerSize = 'Generosity'
var plotYear = 2015
//#########################################################################
//INITIALIZING THE ARRAYS (to hold the values retreived from json)
//#########################################################################

// var Country=[]
// var Economy=[]
// var Family=[]
// var Freedom=[]
// var Generosity=[]
// var LifeExpectancy= [] 
// var Trust=[]
// var Dystopia=[]
// var HappinessRank=[]
// var HappinessScore=[]   

function drawScatter(inputData) {
    console.log(inputData);
    var markerScale = inputData[markerSize].map(function(x) { return x * 25; });
  var trace1 = {
    x: inputData[xAxis],
    y: inputData[yAxis],
    mode: "markers",
    type: "scatter",
    text: Country,
    marker: {
      color: "#2077b4",
      symbol: "circle",
    //   size: unpack_scale(rows, markerSize)
      size: markerScale
    }
  };

  // Create the data array for the plot
  var data = [trace1];
  
  // Define the plot layout
  var layout = {
    // width: 1200,
    height: 800,
    title: "Country Happiness Factor Comparisons",
    xaxis: { title: xAxis },
    yaxis: { title: yAxis }
  };


  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("scatter", data, layout);

}

function loadfrom_getData(year) {
    plotYear = year;
  console.log("inside function loadfrom_getData scatter.js");
  Plotly.deleteTraces('scatter', 0);

    Country=[]
    Economy=[]
    Family=[]
    Freedom=[]
    Generosity=[]
    LifeExpectancy= [] 
    Trust=[]
    Dystopia=[]
    HappinessRank=[]
    HappinessScore=[]   

  var getdataURL = "/getdata/" + String(year);
  d3.json(getdataURL, function (data) {


  Object.entries(data).forEach(function([key, value]) {

    for (var x in value){

        if (x=="Country"){
          Country.push(value[x]);               
      }
      else if (x=="EconomyGDPperCapita"){
          Economy.push(value[x]);
      }
      else if (x=="Family"){
          Family.push(value[x]);
      }
      else if (x=="Freedom"){
          Freedom.push(value[x]);
      }
      else if (x=="Generosity"){
          Generosity.push(value[x]);
      }
      else if (x=="HealthLifeExpectancy"){
          LifeExpectancy.push(value[x]);
      }
      else if (x=="TrustGovernmentCorruption"){
          Trust.push(value[x]);
      }
      else if (x=="DystopiaResidual"){
          Dystopia.push(value[x]);
      }
        else if (x=="HappinessRank"){
            HappinessRank.push(value[x]);
        }
     else if (x=="HappinessScore"){
           HappinessScore.push(value[x]);
     }
    }
    });

    var dataDict = {
        Country: Country,
        Economy: Economy,
        Family: Family,
        Freedom: Freedom,
        Generosity: Generosity,
        LifeExpectancy: LifeExpectancy,
        Trust: Trust,
        Dystopia: Dystopia,
        HappinessRank: HappinessRank,
        HappinessScore: HappinessScore
      };
    console.log(dataDict);
    drawScatter(dataDict);
});

}

function initialLoad(year) {
    console.log("Initial load scatter.js");
    var getdataURL = "/getdata/" + String(year);
    d3.json(getdataURL, function (data) {
    Country=[]
    Economy=[]
    Family=[]
    Freedom=[]
    Generosity=[]
    LifeExpectancy= [] 
    Trust=[]
    Dystopia=[]
    HappinessRank=[]
    HappinessScore=[]   
  
    Object.entries(data).forEach(function([key, value]) {
  
      for (var x in value){
  
          if (x=="Country"){
            Country.push(value[x]);               
        }
        else if (x=="EconomyGDPperCapita"){
            Economy.push(value[x]);
        }
        else if (x=="Family"){
            Family.push(value[x]);
        }
        else if (x=="Freedom"){
            Freedom.push(value[x]);
        }
        else if (x=="Generosity"){
            Generosity.push(value[x]);
        }
        else if (x=="HealthLifeExpectancy"){
            LifeExpectancy.push(value[x]);
        }
        else if (x=="TrustGovernmentCorruption"){
            Trust.push(value[x]);
        }
        else if (x=="DystopiaResidual"){
            Dystopia.push(value[x]);
        }
          else if (x=="HappinessRank"){
              HappinessRank.push(value[x]);
          }
       else if (x=="HappinessScore"){
             HappinessScore.push(value[x]);
       }
      }
      });
  
      var dataDict = {
        Country: Country,
        Economy: Economy,
        Family: Family,
        Freedom: Freedom,
        Generosity: Generosity,
        LifeExpectancy: LifeExpectancy,
        Trust: Trust,
        Dystopia: Dystopia,
        HappinessRank: HappinessRank,
        HappinessScore: HappinessScore
      };
    console.log(dataDict);
    drawScatter(dataDict);
  });
  
  }

// Update the plot with new data
function updateX(newdata) {
    xAxis = newdata;
    loadfrom_getData(plotYear);
};

function updateY(newdata) {
    yAxis = newdata;
    loadfrom_getData(plotYear);
};

function updateMarker(newdata) {
    markerSize = newdata;
    loadfrom_getData(plotYear);
};

// loadfrom_getData(2018);
initialLoad(2015);
console.log("Last Line");
