window.addEventListener('load', function(){
  var body = document.getElementsByTagName('body')[0];
  var camp = document.createElement('div');
  camp.setAttribute('class','camp');
  body.appendChild(camp);

  var border = document.createElement('div');
  border.setAttribute('class','border');
  camp.appendChild(border);

  var goalLeft = document.createElement('div');
  goalLeft.setAttribute('class','goal-left');
  border.appendChild(goalLeft);

  var goalRight = document.createElement('div');
  goalRight.setAttribute('class','goal-right');
  border.appendChild(goalRight);

  var circle = document.createElement('div');
  circle.setAttribute('class','circle');
  border.appendChild(circle);

  var minCircle1 = document.createElement('div');
  minCircle1.setAttribute('class','min-circle-1');
  border.appendChild(minCircle1);

  var minCircle2 = document.createElement('div');
  minCircle2.setAttribute('class','min-circle-2');
  border.appendChild(minCircle2);

  var minCircle3 = document.createElement('div');
  minCircle3.setAttribute('class','min-circle-3');
  border.appendChild(minCircle3);
});
