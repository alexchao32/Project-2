console.log("First Line");

//#########################################################################
//INITIALIZING THE ARRAYS (to hold the values retreived from json)
//#########################################################################



var Country=[]
var Economy=[]
var Family=[]
var Freedom=[]
var Generosity=[]
var LifeExpectancy= [] 
var Trust=[]
var Dystopia=[]
var HappinessRank=[]
var HappinessScore=[]


function drawWorldMap() {
    console.log("inside fucntion loadfrom_getData");
    var data = [{
    type: 'choropleth',
    locationmode: 'country names',
    locations: Country,
    z: HappinessRank,
    // text: unpack(rows, 'location'),

    colorscale: [
          [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
          [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
          [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
  }];

  var layout = {
    width: 1200,
    height: 600,
    title: 'Happiness by Country',
    geo: {
        showframe: false,
        projection: {
            type: 'robinson'
            // type: 'mercator'
        }
    }
  };
  Plotly.newPlot('worldmap', data, layout, {showLink: false});
//   Plotly.newPlot('worldmap', data, layout, {showLink: false});


}

function loadfrom_getData(year) {
  console.log("inside fucntion loadfrom_getData");

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
    drawWorldMap(dataDict);
  });

});
}


loadfrom_getData(2018);
console.log("Last Line");

// Plotly.d3.csv('data/2015.csv', function(err, rows){
//     function unpack(rows, key) {
//         return rows.map(function(row) { return row[key]; });
//     }

//   var data = [{
//       type: 'choropleth',
//       locationmode: 'country names',
//       locations: unpack(rows, 'Country'),
//       z: unpack(rows, 'Happiness Rank'),
//       text: unpack(rows, 'location'),
//     //   s
//     colorscale: [
//             [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
//             [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
//             [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
//   }];

//   var layout = {
//     width: 1200,
//     height: 600,
//     title: 'Happiness Rank',
//     geo: {
//         showframe: false,
//         projection: {
//             type: 'robinson'
//             // type: 'mercator'
//         }
//     }
//   };

//   Plotly.plot("map", data, layout, {showLink: false});

// });

// // Update the plot with new data
// function updatePlotly(newdata) {
//   Plotly.d3.csv('data/2015.csv', function(err, rows){
//     function unpack(rows, key) {
//         return rows.map(function(row) { return row[key]; });
//     }

//   var data = [{
//       type: 'choropleth',
//       locationmode: 'country names',
//       locations: unpack(rows, 'Country'),
//       z: unpack(rows, newdata),
//       text: unpack(rows, 'location'),
//     colorscale: [
//             [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
//             [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
//             [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
//   }];

//   var layout = {
//     width: 1200,
//     height: 600,
//     title: newdata,
//     geo: {
//         showframe: false,
//         projection: {
//             type: 'robinson'
//             // type: 'mercator'
//         }
//     }
//   };

//   Plotly.plot("map", data, layout, {showLink: false});

// });
// }