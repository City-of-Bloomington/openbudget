# openbudget
Visualizations of open budget data. Our public instance of this visualization is currently available here:

https://bloomington.in.gov/alpha/city/budget

The core of this visualization is based on the open sourced visualization library D3:

https://d3js.org/

Specifically, it makes use of their Sankey diagram module:

https://bost.ocks.org/mike/sankey/

Most of the work involves wiring up the source of data to be in the format D3.Sankey wants. This was inspired by the Open Budget Oakland project:

https://github.com/openoakland/openbudgetoakland/

Most of the code in their repository involves a static site generator to create their website:

http://openbudgetoakland.org/
