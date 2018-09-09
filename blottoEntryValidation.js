

function runValidation(){
	console.log("VALIDATING!");
	document.getElementById("submissionbtn").disabled = true;
	if(validateR0()){
		document.getElementById("submissionbtn").disabled = false;
	}
}

/*
Conditions: 
- 100 soldiers over 5 fields
- soldier #s nonincreasing
*/
function validateR0(){
	// Name Check
	if(typeof document.getElementById("name").value != "string" || document.getElementById("name").value == ""){
		console.log("NAME IS EMPTY OR NOT A STRING!");
		return false;
	}
	
	// Soldier Check
	
	numFields = 5;
	soldierNums = [];
	for(i = 1; i <= numFields; i++){
		
		// refuse blank entries
		if(document.getElementById("f" + i).value == ""){
			console.log("FAILED EMPTINESS CHECK!");
			return false;
		} 
		
		entry = Number(document.getElementById("f" + i).value);
		
		if(typeof entry == "number"){
			if(!Number.isInteger(entry) || entry < 0){
				console.log("FAILED INTEGER OR NEGATIVE CHECKS!");
				return false;
			}
			soldierNums.push(entry);
		}
		else{
			console.log("FAILED NUMBER CHECK!");
			return false;
		}
	}

	// Check number of soldiers
	
	soldierSum = soldierNums.reduce((a, b) => a + b, 0);
	
	if(soldierSum != 100){
		console.log("FAILED SOLDIER SUM CHECK!");
		return false; 
	}
	
	console.log("PASSED ALL CHECKS!");
	// passed all the checks!
	return true;
}