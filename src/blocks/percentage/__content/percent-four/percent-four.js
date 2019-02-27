$(document).ready(function() {
  jQuery(".percent-four").radialProgress("init", {
    'size': 100,
    'fill': 5
  }).radialProgress("to", {'perc': 89, 'time': 2000});
})