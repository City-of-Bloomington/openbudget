var datafiles = ['2015-Detail__2015-Summary.csv', '2016-Detail__2016-Summary.csv'],
    years     = [];

datafiles.forEach(function (datafile) {
    years = years.concat(datafile.slice(0,-4).split("__"));
});

years.reverse();

d3.select("#fy.form-control").selectAll('option')
  .data(years)
  .enter()
  .append('option')
  .attr('value', function (d) { return d; })
  .property('selected', function (d,i) { return i == 0; })
  .text(function (d) { return d; });

d3.select("#fy.form-control")
  .on('change', drawFlow);

// run once to initially populate the chart
drawFlow();

function drawFlow() {
    years.reverse();
    var fy = d3.select("#fy.form-control").node().value,
        fy_i = years.indexOf(fy),
        file_i = Math.floor(fy_i / 2),
        filename = datafiles[file_i];

    years.reverse();

    d3.csv("/static/budget/data/" + filename, function (error, data) {
        var final_data = data_wrangle(data, fy);
        do_with_budget(final_data);
    });
}
