// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

/*** CHART 1 ***/

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz_0")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/stanleegoodspeed/dataviz/main/data/data-v2.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([60000, 75000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([50000000, 60000000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.MinIncome); } )
      .attr("cy", function (d) { return y(d.NumHouseholds); } )
      .attr("r", 3.5)
      .style("fill", "#69b3a2");  

});

/*** CHART 2 ***/

// append the svg object to the body of the page
var svg1 = d3.select("#my_dataviz_1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/stanleegoodspeed/dataviz/main/data/data-v2.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([60000, 75000])
    .range([ 0, width ]);
  svg1.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([50000000, 60000000])
    .range([ height, 0]);
  svg1.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg1.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.MinIncome); } )
      .attr("cy", function (d) { return y(d.NumHouseholds); } )
      .attr("r", 3.5)
      .style("fill", "#ff0651");  

});


/*** CHART 3 ***/

// append the svg object to the body of the page
var svg2 = d3.select("#my_dataviz_2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/stanleegoodspeed/dataviz/main/data/data-v2.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([60000, 75000])
    .range([ 0, width ]);
  svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([50000000, 60000000])
    .range([ height, 0]);
  svg2.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg2.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.MinIncome); } )
      .attr("cy", function (d) { return y(d.NumHouseholds); } )
      .attr("r", 3.5)
      .style("fill", "#c600ff");  

});

/*** CHART 4 ***/

// append the svg object to the body of the page
var svg3 = d3.select("#my_dataviz_3")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/stanleegoodspeed/dataviz/main/data/data-v2.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([60000, 75000])
    .range([ 0, width ]);
  svg3.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([50000000, 60000000])
    .range([ height, 0]);
  svg3.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg3.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.MinIncome); } )
      .attr("cy", function (d) { return y(d.NumHouseholds); } )
      .attr("r", 3.5)
      .style("fill", "#ffb600");  

});