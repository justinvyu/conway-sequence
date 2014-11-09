/*

1
11
21
1211
111221
312211
13112221

*/

var line, currentChar, newString, counter;

function sequence (lineNumber, testingLine) {
	document.write(testingLine + "<br>");
	newString = "";
	if(line < lineNumber) {

		//console.log(previousChar);
		for(var i = 0; i < testingLine.length; i++) {
			currentChar = testingLine.charAt(i);
			if((i + 1 < testingLine.length) && testingLine.charAt(i+1) == currentChar) {
				counter++;
			} else {
				// console.log("Counter= " + counter, "Previous Character= " + previousChar );
				newString += (counter.toString() + currentChar);
				counter = 1;
			}
		}
		line++;

	} else {
		return testingLine;
	}
	return sequence(lineNumber, newString);

}

function main () {

	var initialString = document.getElementById("initial").value;
	var lineToBePrinted = document.getElementById("line").value;

	line = 0;

	currentChar = "";
	newString = "";

	counter = 1;

	sequence(lineToBePrinted, initialString);
}
