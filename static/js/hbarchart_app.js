//let MS=[44, 55, 41, 37, 22, 43, 200]

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

// $(document).ready(function(){
//   $("#btn_2018").click(function() {
//     $("#myChart").remove();
    
//     console.log("removed chart");
//     $("#chartReport").append('<canvas id="myChart" class="canvasclass"></canvas>');
//     loadfrom_getData(2018);
//   });
//  });

//select the table body using d3
//var canvas = d3.select("canvas");

//#########################################################################
///:LOADING FROM CSV
//#########################################################################
// function loadData(){
//  d3.csv("static/js/2017.csv", function(csv) {

//     for (x in csv) {
//             if (x=="Country"){
//                 Country.push(csv[x]);               
//             }
//             else if (x=="Economy..GDP.per.Capita."){
//                 Economy.push(csv[x]);
//             }
//             else if (x=="Family"){
//                 Family.push(csv[x]);
//             }
//             else if (x=="Freedom"){
//                 Freedom.push(csv[x]);
//             }
//             else if (x=="Generosity"){
//                 Generosity.push(csv[x]);
//             }
//             else if (x=="Health..Life.Expectancy."){
//                 LifeExpectancy.push(csv[x]);
//             }
//             else if (x=="Trust..Government.Corruption."){
//                 Trust.push(csv[x]);
//             }
//             else if (x=="Dystopia.Residual"){
//                 Dystopia.push(csv[x]);
//             }
//             //console.log(x);
//             //console.log(csv[x]);
//         //if (key='Country'){
//           //  Country.push(csv[key])


//         }
//        // console.log(key, csv[key]);

//       }
//     //console.log(csv)
//     //csv.map(function(d) {
//       //  Dystopia.push(d.Dystopia.Residual);
//         //prevalence.push(d.prevalence);
//         //disability.push(d.disability);
   
//     //})
//     //console.log(data);
// );

//     };


//#########################################################################
//FUNCTION TO LOAD THE CHART USING CHART.js
//#########################################################################

function loadChart() {
  console.log('function ran')
  var chartElement = $('.canvasclass')
console.log(chartElement)
chartElement.remove();
$("#chartReport").append('<canvas id="myChart" class="canvasclass"></canvas>');

//canvas.html("");

stackedBar = new Chart(document.getElementById('myChart'), {
  type: 'horizontalBar',
  data: {
    labels: Country,
    
    datasets: [{
      label: 'Economy | GDP per Capita',
      backgroundColor: 'purple',
      data: Economy,
      //stack: 1
    },{
      label: 'Family',
      backgroundColor: 'pink',
      data: Family,
     // stack: 2
    },{
      label: 'Freedom',
      backgroundColor: 'orange',
      data: Freedom,
      //stack: 3
    },{
      label: 'Generosity',
      backgroundColor: 'yellow',
      data: Generosity,
     // stack: 4
    },{
      label: 'Health & Life Expectancy',
      backgroundColor: 'cyan',
      data: LifeExpectancy,
     // stack: 5
    },{
      label: 'Trust | Government Corruption',
      backgroundColor: 'indigo',
      data: Trust,
      //stack: 6
    },{
      label: 'Dystopia.Residual',
      backgroundColor: 'lavender',
      data: Dystopia,
     // stack: 7
    }


]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
      scales: {
          xAxes: [{
              stacked: true,
              gridLines: {
                display: false
              },
              fontSize: 50,
              position: 'top'
          }],
          yAxes: [{
              stacked: true,
              gridLines: {
                display: false
              },
              barPercentage: 0.8,
              //barThickness: 50
              categoryPercentage: 0.7
              
          }]
      }
  }
});

};

//#########################################################################
//LOADING DATA FROM JSON
//#########################################################################

function loadfrom_getData(year) {
  console.log("inside fucntion loadfrom_getData");

  var getdataURL = "/getdata/" + String(year);
  d3.json(getdataURL, function (data) {
  //console.log(data)
  //console.log("Inside load Year="+ year)
  
  //tableData=data;
  Country=[]
  Economy=[]
  Family=[]
  Freedom=[]
  Generosity=[]
  LifeExpectancy= [] 
  Trust=[]
  Dystopia=[]

  Object.entries(data).forEach(function([key, value]) {
    //console.log("inside loadfrom")
    //console.log(Object.keys(value));

    for (var x in value){
      //console.log("x_key="+x);
      //console.log("data="+value[x]);

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
    }
    });
    //console.log("Last Line after if loop");
    //console.log("country[]="+Country);
    //console.log("GDP[]="+Economy)
    //loadData();
    
    loadChart();
})

}



loadfrom_getData(2018);
console.log("Last Line");
//loadData();
//loadChart();