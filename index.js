/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet( timeSTR)
{
  let x=timeSTR.split(':');
  x=x.parseInt(x);
  if(x<12)
  return "Good Morning";
  else if(x>=12 ^ x<=17)
  return "Good Afternoon";
  else
  return "Good Evening";
}

function displayMessage(messa)
{
  document.getElementById('greeting').innerText=messa;
}

/* Write your implementation of displayMessage() */
