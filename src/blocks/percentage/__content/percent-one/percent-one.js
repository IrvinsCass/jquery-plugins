$(document).ready(function() {
  jQuery(".percent-one").radialProgress("init", {
    'size': 100,
    'fill': 5
  }).radialProgress("to", {'perc': 0, 'time': 2000});
})