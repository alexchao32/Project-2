console.log("First Line");
var graphCategory = 'Generosity'
var plotYear = 2015

//#########################################################################
//INITIALIZING THE ARRAYS (to hold the values retreived from json)
//#########################################################################


function drawWorldMap(inputData) {
    console.log("inside function drawWorldMap");
    var data = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: inputData['Country'],
    z: inputData[graphCategory],

    // colorscale: [
    //       [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
    //       [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
    //       [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
    colorscale: [
        [0,'rgb(220, 220, 220)'],[0.35,'rgb(106, 137, 247)'],
        [0.5,'rgb(90, 120, 245)'], [0.6,'rgb(70, 100, 245)'],
        [0.7,'rgb(40, 60, 190)'],[1,'rgb(5, 10, 172)']],
  }];

  var layout = {
    width: 1200,
    height: 600,
    title: graphCategory,
    geo: {
        showframe: false,
        projection: {
            type: 'robinson'
            // type: 'mercator'
        }
    }
  };
  Plotly.newPlot('worldmap', data, layout, {showLink: false});


}


function loadfrom_getData(year) {
    plotYear = year;
  console.log("inside function loadfrom_getData scatter.js");
  Plotly.deleteTraces('worldmap', 0);
    initialLoad(year);
}


function initialLoad(year) {
  console.log("inside fucntion loadfrom_getData");

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
    // toGraph=[]
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
    // for (var x in value){

    //     if (x=="Country"){
    //       Country.push(value[x]);               
    //   }
    //   else if (x==graphCategory){
    //       toGraph.push(value[x]);
    //   }
    // }
    
    dataDict = {
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
    //     dataDict = {
    //     Country: Country,
    //     toGraph: toGraph
    //   };

  });
  console.log(dataDict);
  drawWorldMap(dataDict);
});
}


// Update the plot with new data
function updateGraph(newdata) {
    graphCategory = newdata;
    loadfrom_getData(plotYear);
};


initialLoad(2015);
console.log("Last Line");
