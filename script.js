function firstWord(s) {
  // your code here
	let trimedS=s.trim();
	return (trimedS.split(" "))[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
