import './index.scss'
import './index.pug'
import './blocks/standart-buttons/standart-buttons'
import './blocks/percentage/percentages'
import './blocks/sliders/sliders'
import './blocks/stages/stages'
import './blocks/form-elements/form-elements'
import './blocks/news/news'

$(document).ready(function() {
  $('.news-tracker').easyTicker({
    height: '210px',
    speed: 'slow',
    interval: 6000,
    visible: 1
  });

  $('.events-tracker').easyTicker({
    height: '210px',
    speed: 'slow',
    interval: 5000,
    visible: 1
  });

  $('.cyan-slider__slider').jRange({
    from: 0,
    to: 100,
    showLabels : false,
    theme : 'theme-green',
    scale: [0,25,50,75,100]
    });
  
  $('.orange-slider__slider').jRange({
    from: 0,
    to: 100,
    showLabels : true,
    showScale : false,
    theme : 'theme-orange',
    });
    
})