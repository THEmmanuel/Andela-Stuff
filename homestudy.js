//Power Homestudy Power test 
//

function power(x,y){
    var result = 1;
    while (y--){
      result *= x;
    }
     return result;
  }
  console.log(power(2,8));

//Return Even and Odd Numbers

const number_game = (x, y) => {
  const min = Math.min(x, y), max = Math.max(x, y);

  return Array.from(Array(max - min), (_, i) => i + min).slice(1)
    .filter(v => v % 2 == (x < y));
};
console.log(number_game(3, 13))





const number_game = (x, y) => {
    if (x < y ){
      var oddNumbers = new Array();
    for(var i = x; i <y; i++){
    if (i % 2  !== 0){
        oddNumbers.push(i);
        }
    }
        return oddNumbers;
    }

    


    //This one works
    const number_game = (x, y) => {
      if (x < y ){
        var oddNumbers = [];
      for(var i = x; i <= y; i++){
      if (i % 2  !== 0){
          oddNumbers.push(i);
          }
      }
          return oddNumbers;
      }
      if(x > y){
          var evenNumbers = [];
          for(var i = y; i<= x; i++){
              if (i % 2 === 0){
                  evenNumbers.push(i);
              }
          }
          return evenNumbers;
      }
         if (x === y){
          var emptyArray = [];
            return emptyArray;
        }
      }


    if(x > y){
        var evenNumbers = new Array();
        for(var i = y; i< x; i++){
            if (i % 2 === 0){
                evenNumbers.push(i);
            }
        }
        return evenNumbers;
    }
      
       if (x === y){
         var emptyArray = new Ar;
        emptyArray = [];
          return emptyArray;
      }
    }
 console.log(number_game(0, 0));
 a = 1

 while(a){
 
   a += 23;
 
   console.log(a)
 
 }
 
 



 //Digitize Solution
 function digitize(n){
     var digitizedArray = [];
     var digitized = n.toString();

     for (var i = 0, len = digitized.length; i < len; i += 1){
        digitizedArray.push(+digitized.charAt(i));
     }
     return digitizedArray;
 }
 console.log(digitize(75894871882));

 //OOP TEST
 class User {
    constructor(name) {
     this._name = name;
     this._loggedIn = false;
     this._lastLoggedInAt = null;
    }
    isLoggedIn() {
      return this._loggedIn;
    }
    getLastLoggedInAt() {
      return this._lastLoggedInAt;
    }
    logIn() {
      this._lastLoggedInAt = new Date();
      this._loggedIn = true;
    }
    logOut() {
      this._loggedIn = false
    }
    getName() {
      return this._name;
    }
    setName(name) {
      this._name = name;
    }
    canEdit(comment) {
      if(comment._author._name === this._name) {
        return true;
      }
      return false;
    }
    canDelete(comment) {
      return false;
    }
  }
  
  class Moderator extends User {
     constructor(name) {
       super(name);
     }
     canDelete(comment) {
       return true;
     }
  }
  
  class Admin extends Moderator {
    constructor(name) {
      super(name)
    }
    canEdit(comment) {
      return true;
    }
  }
  
  class Comment {
     constructor(author = null, message, repliedTo = null) {
       this._createdAt = new Date();
       this._message = message;
       this._repliedTo = repliedTo;
       this._author = author;
     }
     getMessage() {
       return this._message;
     }
     setMessage(message) {
       this._message = message;
     }
     getCreatedAt() {
       return this._createdAt;
     }
     getAuthor() {
       return this._author;
     }
     getRepliedTo() {
       return this._repliedTo;
     }
     toString() {
       if(this._repliedTo === null) {
          return this._message + " by " + this._author._name
       }
       return this._message + " by " + this._author._name + " (replied to " + 
            this._repliedTo._author._name + ")"
     }
   }


//Sort Even And odd numbers
 function mySort(nums) {
    var oddArray = [];
    var evenArray = [];
    var sortedArray = oddArray.concat(evenArray);

    for(var i = minNumber; i < maxNumber; i++){
        if (i % 2 === 0){
            evenArray.push(i);
        } 

        if (i % 2 !== 0){
            oddArray.push(i);
        }
    }   
    return sortedArray
}

//Ordinal Numbers
function numberToOrdinal(n) {
    var j = n % 10,
    k = n % 100;
if (j == 1 && k != 11) {
    return n + "st";
}
if (j == 2 && k != 12) {
    return n + "nd";
}
if (j == 3 && k != 13) {
    return n + "rd";
}
return n + "th";
}
console.log(numberToOrdinal([0]))

//New MySort
function mySort(nums) {
    let evens = [];
    let odds = [];
  
    for (let i = 0; i < nums.length; i++) {
      if(typeof nums[i] === "number"){ // ignore if its not a number
        if ((nums[i] % 2) === 1) {
            odds.push(parseInt(nums[i]));
        }
        else {
            evens.push(parseInt(nums[i]));
        }
      }
    }
    let numsArray = odds.sort((a, b) => a - b).concat(evens.sort((a, b) => a - b));
    return numsArray;
  }

  //Test Functions
  var displayBirthdate = () => {
    var result = 2*2
    return result
  }
  var displayPhone= () => {
    
  }
  var displayAddress= () =>{
    
  }
  console.log(displayBirthdate());

  //Count Change
  var countChange = function(coins, money) {
    var dp = Array(money + 1).fill(0)
    dp[0] = 1

    for (var i = 0; i < coins.length; i++) {
        for (var j = coins[i]; j <= money; j++) {
            dp[j] += dp[j - coins[i]]
        }
    }
    return dp[money]
}
console.log(countChange(4,[1,2]), 3);

function countChange (money,coins) {
  const arr = [];
  let sum;
  for(let i = 0; i < coins.length; i++) {
    for(let j = 0; j < coins.length; j++) {
      let value = coins[i] + coins[j];
      //console.log(value, value, value);
      if(value === money) {
        arr.push(value);
      }
      //console.log(coins[i], coins[j]);
    }
  }

coins.forEach(e => {
    sum = e;
  
    while (sum < money) {
      sum += e;
      if(sum === money) {
        arr.push(sum);
      } 
    }
  });

let bigHead = coins.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

if (bigHead === money) {
 arr.push(bigHead);
}

  return arr.length;
}

//this (OrdinalNumbers) works!!!!!!!
function numberToOrdinal(n) {
    var tens = n % 10;
    var hundreds = n % 100;
if (tens == 1 && hundreds != 11) {
    return n + "st";
}
if (tens == 2 && hundreds != 12) {
    return n + "nd";
}
if (tens == 3 && hundreds != 13) {
    return n + "rd";
}
if (tens == 0 && tens != 1){
  return n + "th";
}
 //if (hundreds > 13)

return n + "th";
}

console.log(numberToOrdinal(32));

function numberToOrdinal(i) {
  var j = i % 10,
      k = i % 100;

  if(j == 0 && i == 0){
    return 0;
  }
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";

}



function numberToOrdinal(num) {
    var ones = num % 10;
    var tens = num % 100;

    if (ones < 11 || tens > 13) {
        switch (ones) {
            case 1:
                return num + "st";
            case 2:
                return num + "nd";
            case 3:
                return num + "rd";
        }
    }
     if (ones < 1){
         return 0;
     }

    return num + "th";}

    console.log(numberToOrdinal(0))


    //Ordinal numbers (Take three)
    function ordinalSuffix(digit) {
      stringDigit = digit.toString();
      lastDigits = stringDigit.slice(-1); 
      last2Digits = stringDigit.slice(-2);
      console.log(lastDigits)
      if (lastDigits == 1 && digit != 11 && digit < 110) {
        return "st";
      }
      if (lastDigits == 2 && digit != 12 && digit < 110) {
        return "nd";
      }
      if (last2Digits == 03 || lastDigits == 3 && digit != 13 && digit < 110) {
        return "rd";
      }
      if (lastDigits > 4 && lastDigits < 9) {
        return "th";
      }
      if (last2Digits[0] !== 0 ) {
        return "th";
      }
      console.log(ordinalSuffix(5));
    }


    function Ordinalized(num){
        stringedNum = num.toString();
        lastDigits = stringedNum.slice(-1);
        lastTwoDigits = stringedNum.slice(-2);

    
      if (lastDigits == 1 && digit != 11 && digit < 110) {
         return num + "st";
       }
       if (lastDigits == 2 && digit != 12 && digit < 110) {
      return num + "nd";
       }
      if (last2Digits == 03 || lastDigits == 3 && digit != 13 && digit < 110) {
      return num + "rd";
       }
       if (lastDigits > 4 && lastDigits < 9) {
         return num + "th";
       }
       if (last2Digits[0] !== 0 ) {
         return num + "th";
      }
    }
    console.log(Ordinalized(500))