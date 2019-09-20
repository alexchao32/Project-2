
Plotly.d3.csv('data/2015.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

  var data = [{
      type: 'choropleth',
      locationmode: 'country names',
      locations: unpack(rows, 'Country'),
      z: unpack(rows, 'Happiness Rank'),
      text: unpack(rows, 'location'),
    //   s
    colorscale: [
            [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
            [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
            [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
  }];

  var layout = {
    width: 1200,
    height: 600,
    title: 'Happiness Rank',
    geo: {
        showframe: false,
        projection: {
            type: 'robinson'
            // type: 'mercator'
        }
    }
  };

  Plotly.plot("map", data, layout, {showLink: false});

});

// Update the plot with new data
function updatePlotly(newdata) {
  Plotly.d3.csv('data/2015.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

  var data = [{
      type: 'choropleth',
      locationmode: 'country names',
      locations: unpack(rows, 'Country'),
      z: unpack(rows, newdata),
      text: unpack(rows, 'location'),
    colorscale: [
            [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
            [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
            [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
  }];

  var layout = {
    width: 1200,
    height: 600,
    title: newdata,
    geo: {
        showframe: false,
        projection: {
            type: 'robinson'
            // type: 'mercator'
        }
    }
  };

  Plotly.plot("map", data, layout, {showLink: false});

});
}