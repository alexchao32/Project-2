var xAxis = 'Freedom'
var yAxis = 'Family'
var markerSize = 'Generosity'

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
};

function unpack_scale(rows, key) {
    return rows.map(function(row) { return row[key]*20; });
};


Plotly.d3.csv('data/2015.csv', function(err, rows){

// Create the Traces
var trace1 = {
    x: unpack(rows, xAxis),
    y: unpack(rows, yAxis),
    mode: "markers",
    type: "scatter",
    text: unpack(rows, 'Country'),
    marker: {
      color: "#2077b4",
      symbol: "circle",
      size: unpack_scale(rows, markerSize)
    }
  };

  // Create the data array for the plot
  var data = [trace1];
  
  // Define the plot layout
  var layout = {
    width: 600,
    height: 600,
    title: "Country Happiness Factor Comparisons",
    xaxis: { title: xAxis },
    yaxis: { title: yAxis }
  };


  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("scatter", data, layout);
});

// Update the plot with new data
function updateX(newdata) {
    xAxis = newdata
    Plotly.d3.csv('data/2015.csv', function(err, rows){

    // Create the Traces
    var trace1 = {
        x: unpack(rows, xAxis),
        y: unpack(rows, yAxis),
        mode: "markers",
        type: "scatter",
        text: unpack(rows, 'Country'),
        marker: {
        color: "#2077b4",
        symbol: "circle",
        size: unpack_scale(rows, markerSize)
        }
    };

    // Create the data array for the plot
    var data = [trace1];
    
    // Define the plot layout
    var layout = {
        width: 600,
        height: 600,
        title: "Country Happiness Factor Comparisons",
        xaxis: { title: xAxis },
        yaxis: { title: yAxis }
    };


    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("scatter", data, layout);
    });
};

// Update the plot with new data
function updateY(newdata) {
    yAxis = newdata
    Plotly.d3.csv('data/2015.csv', function(err, rows){

    // Create the Traces
    var trace1 = {
        x: unpack(rows, xAxis),
        y: unpack(rows, yAxis),
        mode: "markers",
        type: "scatter",
        text: unpack(rows, 'Country'),
        marker: {
        color: "#2077b4",
        symbol: "circle",
        size: unpack_scale(rows, markerSize)
        }
    };

    // Create the data array for the plot
    var data = [trace1];
    
    // Define the plot layout
    var layout = {
        width: 600,
        height: 600,
        title: "Country Happiness Factor Comparisons",
        xaxis: { title: xAxis },
        yaxis: { title: yAxis }
    };


    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("scatter", data, layout);
    });
};


// Update the plot with new data
function updateMarker(newdata) {
    markerSize = newdata
    Plotly.d3.csv('data/2015.csv', function(err, rows){

    // Create the Traces
    var trace1 = {
        x: unpack(rows, xAxis),
        y: unpack(rows, yAxis),
        mode: "markers",
        type: "scatter",
        text: unpack(rows, 'Country'),
        marker: {
        color: "#2077b4",
        symbol: "circle",
        size: unpack_scale(rows, markerSize)
        }
    };

    // Create the data array for the plot
    var data = [trace1];
    
    // Define the plot layout
    var layout = {
        width: 600,
        height: 600,
        title: "Country Happiness Factor Comparisons",
        xaxis: { title: xAxis },
        yaxis: { title: yAxis }
    };


    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("scatter", data, layout);
    });
};