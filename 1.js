$(function () {

  $('#testDiv').slimScroll({
    alwaysVisible: true,
    railVisible: true
  });

  $('#testDiv2').slimScroll({
    railVisible: true,
    railColor: '#f00'
  });

  $('#testDiv3').slimScroll({
    railVisible: true,
    railOpacity: 0.8
  });

  $('#testDiv4').slimscroll({
    railVisible: true,
    railBorderRadius: 0
  });

  $('#testDiv5').slimscroll({
    railDraggable: false
  });
});