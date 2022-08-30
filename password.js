var password = 'Wordp@ss2022'
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;
var prompt = 'Enter Password'


while (response != password) {
  if (entryCount < entryLimit) {
    response = prompt("Enter Password");
    entryCount++;
  } else {
    error = true;
  }console.log(password)


}
alert('You got it!');

//This was hard. I did my best haha