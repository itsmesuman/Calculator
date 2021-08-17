let screen = document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
item.addEventListener('click', function(event){
   buttonText =   event.target.innerText;
  if(buttonText == 'x'){
     buttonText = '*';
     screenValue += buttonText;
     screen.value = screenValue; 
  }
  else if(buttonText == 'C') {
       screen.value ='';
       screenValue = '';
  }
  else if(buttonText == 'X') {
     screenValue = screenValue.substr(0, screenValue.length - 1);
     screen.value =screenValue;
  }
  else if(buttonText == '='){
     screen.value = eval(screenValue);
  }else{
     screenValue += buttonText;
     screen.value = screenValue;
  }
   
});

}
