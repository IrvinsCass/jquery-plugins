$(document).ready(function() {
  jQuery(".percent-three").radialProgress("init", {
    'size': 100,
    'fill': 5
  }).radialProgress("to", {'perc': 62, 'time': 2000});
})