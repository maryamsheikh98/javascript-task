// Maryam Hanif 
// Roll No: "WMA-132932"


// ********* QUESTION # 1 *********

function integer(arr, s)
{
	let result = arr[0];

	for (let i = 0; i < s; i++) 
	{
		let multiply = arr[i];
		for (let j = i + 1; j < s; j++) 
		{
			result = Math.max(result, multiply);
			multiply *= arr[j];
		}
		result = Math.max(result, multiply);
	}
	return result;
}

	let arr = [ 2, 3, -2, 4];
	let s = arr.length;
	console.log(" The Largest Product is: "
		+ integer(arr, s));




// ********* QUESTION # 2 *********

function add(nums, target) {
    const integer1 = {};
    for (let i = 0; i < nums.length; i++) {
        const action = target - nums[i];
        if (integer1.hasOwnProperty(action)) {
            return [integer1[action], i];
        }
        integer1[nums[i]] = i;
    }
    
    return []; 
}
const nums = [2, 7, 11, 15];
const target = 9;
console.log(add(nums, target)); 




// ********* QUESTION # 3 *********

function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);




// ********* QUESTION # 4 ********* 

let lib = [
    {
        title: "The Road Ahead",
        author: "bill gates",
        readingStatus: true
    },
    {
        title: "walter isaacson",
        author: "steve jobs",
        readingStatus: true
    },
    {
        title: "Mockingjay: The final book of the hanger games",
        author: "George Orwell",
        readingStatus: false
    }
];
function booksSt(kitab) {
    for (let i = 0; i < kitab.length; i++) {
        let book = kitab[i];
        let stat = book.readingStatus ? "already read" : "not read yet";
        console.log("Book: " + book.title + " by " + book.author + " - " + stat);
    }
}

booksSt(lib);



// ********* QUESTION # 5 *********

function amountTocoins(amount, coins) {
    if (amount === 0) {
      return [];
    } else {
      if (amount >= coins[0]) {
        left = (amount - coins[0]);

        return [coins[0]].concat(amountTocoins(left, coins));
      } else {
        coins.shift();
        return amountTocoins(amount, coins);
      }
    }
  }

  console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
