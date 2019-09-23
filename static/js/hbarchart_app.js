//let MS=[44, 55, 41, 37, 22, 43, 200]
var Country=[]
var Economy=[]
var Family=[]
var Freedom=[]
var Generosity=[]
var LifeExpectancy= [] 
var Trust=[]
var Dystopia=[]





function loadData(){
 d3.csv("static/js/2017.csv", function(csv) {

    for (x in csv) {
            if (x=="Country"){
                Country.push(csv[x]);               
            }
            else if (x=="Economy..GDP.per.Capita."){
                Economy.push(csv[x]);
            }
            else if (x=="Family"){
                Family.push(csv[x]);
            }
            else if (x=="Freedom"){
                Freedom.push(csv[x]);
            }
            else if (x=="Generosity"){
                Generosity.push(csv[x]);
            }
            else if (x=="Health..Life.Expectancy."){
                LifeExpectancy.push(csv[x]);
            }
            else if (x=="Trust..Government.Corruption."){
                Trust.push(csv[x]);
            }
            else if (x=="Dystopia.Residual"){
                Dystopia.push(csv[x]);
            }
            //console.log(x);
            //console.log(csv[x]);
        //if (key='Country'){
          //  Country.push(csv[key])


        }
       // console.log(key, csv[key]);

      }
    //console.log(csv)
    //csv.map(function(d) {
      //  Dystopia.push(d.Dystopia.Residual);
        //prevalence.push(d.prevalence);
        //disability.push(d.disability);
   
    //})
    //console.log(data);
);

    };



function loadChart() {
var stackedBar = new Chart(document.getElementById('myChart'), {
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
              fontSize: 50
          }],
          yAxes: [{
              stacked: true,
              barPercentage: 0.8,
              //barThickness: 50
              categoryPercentage: 0.7
              
          }]
      }
  }
});

};


function loadfrom_getData(year) {
  console.log("Last Linexxxx");

  var getdataURL = "/getdata/" + String(year);
  d3.json(getdataURL, function (data) {
  //console.log(data)
  //console.log("Inside load Year="+ year)
  
  //tableData=data;

  Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);

    });
    console.log("Last Linexxxxyyyyy");
    loadData();
    loadChart();
})
}
 


loadfrom_getData(2015);
console.log("Last Line");
//loadData();
//loadChart();