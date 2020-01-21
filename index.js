/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet( timeSTR)
{
  if(timeSTR<12)
  return "Good Morning";
  else if(timeSTR>=12 ^ timeSTR=<17)
  return "Good Afternoon";
  
}

/* Write your implementation of displayMessage() */
