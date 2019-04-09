import './index.scss'
import './index.pug'
import './blocks/standart-buttons/standart-buttons'
import './blocks/percentage/percentages'
import './blocks/sliders/sliders'
import './blocks/stages/stages'
import './blocks/form-elements/form-elements'
import './blocks/news/news'
import './blocks/calendar/calendar'
import './blocks/chat/chat'
import './blocks/location/location'

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

  $(function () {
    $('.calendar-window__body').calendar({
      color: '#e75735',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    });
  });
    
  var convForm = $('.chat-window__content').convform({
    placeHolder : 'Type Here',
    typeInputUi : 'input', // 'input' or 'textarea'
    timeOutFirstQuestion : 1200,
    buttonClassStyle : 'icon2-arrow',
    selectInputStyle: 'show', // or disable, hide
    selectInputDisabledText: 'Select an option',
    eventList : {
      onSubmitForm : function(convState) {
        console.log('completed');
        convState.form.submit();
        return true;
      },
      onInputSubmit : function(convState, readyCallback) {
        if(convState.current.input.hasOwnProperty('callback')) {
          if(typeof convState.current.input.callback === 'string') {
            window[convState.current.input.callback](convState, readyCallback);
          } else {
            convState.current.input.callback(convState, readyCallback);
          }
        } else {
          readyCallback();
        }
      }
    },
    formIdName : 'convForm',
    inputIdName : 'userInput',
    loadSpinnerVisible : '',
    buttonText: 'REPLY'
});
})