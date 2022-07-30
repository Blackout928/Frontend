

let phrase = "exynosisbad";

let phraseLength = phrase.length

if (phraseLength > 10) {
    console.log('your phrase is approved!');
}

else{
    console.log('Your string isnt long enough')
}
// experiment with index
console.log('Hello World!'[10])

let name = "Doofenshmirtz";
console.log(name[name.length -1])

//integers

let num = 3;
console.log(typeof num)

console.log(num + 3);

// booleans 
/* note to self Null means the variable is intentionally 0 whilst 
undefined means a value was never set in the first place*/ 
console.log(5 > 10)
console.log(null >= 0)

// Variables

/*note to self: make your variable names descriptive and 
not bland. instead of "camels" do "numberOfCamels" or instead of name try myName*/
let myName = "Will";
let isRaining = true;
let temperature = 20
/* i can change variables by using thing like +=, -=. *=, /=.*/
temperature += 23;
console.log(temperature);
/* const is a variable type that can't be changed, it is a permanent value unless the value is directly changed*/ 
/*code shows that i have 12 plushies*/
const plushyNumber = 12;
/*this code displays on the console that I have 12 plushies, and using ${plushyNumber},
I can easily insert a variable in my string */
console.log(`I have ${plushyNumber} plushies`);
/* this piece of code will do nothing and break the script, it cant be changed like a let
hence the name const, meaning constant

const plushyNumber = 50; */

/*code underneath converts celcius to farenheit*/

let celsius = 10;
let farenheit = celsius * (9 / 5) + 32;
console.log(`It is ${celsius} degrees celsius and ${farenheit} degrees farenheit`);


/* comparing values and equality*/
/* == is for checking values while === is for comparing like in if statements*/
/* !== is for comparing if one value is not equal to the other*/


let bool = 1 !== 1
console.log(bool)
//returns false because 1 is equal to 1

//Conditionals
let subscribed = false
let loggedIn = true
// variables you can change
if (subscribed) {
  console.log("show the video")
}
else if (loggedIn && !subscribed) {
  console.log('Upgrade you cheap fuck')
}
else if (!loggedIn && subscribed) {           
  console.log('goofy ahhh log in retard')
}
else {
  console.log("no video for u lmao")
}
// in this code block I incorporated the and (&&) operator and this
// tells the if statement if BOTH conditions are true, then do this action

// you at the apple store

let cash = 1320
let price = 1320
let isStoreOpen = true
let change = cash - price
let difference = price - cash

if (!isStoreOpen) {
  console.log("get out of the store it's closed bozo")
}
else if (cash === price) {
  console.log('Here you go, also by the way why would you come into the apple store with the EXACT amount of money you need??')
}
else if (cash >= price) {
  console.log(`Nice, your broke ass just bought some metal and some glass for 1300 dollars! thanks for shopping at apple, by the way your change is ${change} dollars`)
}
else {
  console.log(`aw hell naw mf you walked into the apple store with ${cash} dollars, you need ${difference} more you broke fuck`)
}


const cashInWallet = '50'
const costOfBattlePass = '30'
const isServerDown = false;
function doIHaveEnoughForFortniteBattlePass () {

  if (cashInWallet > costOfBattlePass && !isServerDown) {
    console.log('you have enough for the battle pass')
  }
  else if (isServerDown) {
    console.log('bozo the server is down')
  }
  else {
    console.log('sorry, you dont have enough for the battle pass')
  }
}

doIHaveEnoughForFortniteBattlePass();


let isObese = true;
isObese ? 'unhealthy' : 'healthy'

let hot = true
hot ? console.log('pretty hot') : console.log('too cold')
//use of ternarary operators, better than if else statements because it's on one line

//example on line 71 into a ternaray operator

let subbed = true
let login = true
subbed && login ? console.log('heres your video bozo') : console.log('no video for u')

let fardcash = 2000
let fardprice = 40
let isFardStoreOpen = true

let str = cash >= price && isFardStoreOpen ? console.log("Give receipt") : console.log("Don't give receipt")
console.log(str)

