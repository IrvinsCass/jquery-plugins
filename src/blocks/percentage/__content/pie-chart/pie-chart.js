$(document).ready(function() {
  jQuery(".pie-chart").radialPieChart("init", {
    'font-size': 0,
    'fill': 10,
    'size': 100,
    'data': [
      {'color': "#e5e5e5", 'perc': 60},
      {'color': "#4eb7a8", 'perc': 30},
      {'color': "#e75735", 'perc': 20},
      {'color': "#747474", 'perc': 10}
    ]
  });
})