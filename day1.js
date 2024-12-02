function test(fileInput) {
// const fileInput = document.getElementById('fileInput');
const file = fileInput.files[0];
console.log(file);
const reader = new FileReader();
reader.onload = function(event) {
  const fileContents = event.target.result;
  const lines = fileContents.split('\n');
  let id1 = [];
  let id2 = [];
  let distance = [];
  let total = 0;
  let total2 = 0;

  for (let line = 0; line < lines.length; line++){
    const words = lines[line].split(' ').filter(word => word !== '');
    id1 = [...id1, words[0]];
    id2 = [...id2, words[1]];       

  }
  id1.sort((a,b) => a - b);
  id2.sort((a,b) => a - b)
  
  
  for (let i = 0; i < id1.length; i++){
   const number1 = id1[i];
   const number2 = id2[i];

   let result = number1 - number2;
   if (result < 0) {
    result = result * -1;
   }

   distance = [...distance, result]

  };
  console.log(distance);
  distance.forEach((number) => {
    if (!isNaN(number)){
    total += number
  }
  })
  console.log(total);
  console.log(id1);
  
  for (let i = 0; i < id1.length; i++) {
    const number=id1[i];
    const many = id2.filter( x => x === number)
    
    //multiply number per many.length and add to total2
    if (!isNaN(number) && ! isNaN(many.length )){
    total2 = total2 + (number * many.length);  
    console.log(number + '+' + many.length  + '=' + total2);
      
  }
  else {
    console.log('NOT A NUMBER' + ':' + number  + ':' + many);
    
  }
}
  console.log(total2);
  

};

reader.readAsText(file);
}


