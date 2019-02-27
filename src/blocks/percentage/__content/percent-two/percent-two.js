$(document).ready(function() {
  jQuery(".percent-two").radialProgress("init", {
    'size': 100,
    'fill': 5
  }).radialProgress("to", {'perc': 38, 'time': 2000});
})