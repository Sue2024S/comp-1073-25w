	/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
		let myName;
		let myAge;

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
		myName = "Susan";
		myAge = 28;

		const myJob = "Student";


		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
		myAge = 30;
		myName = "Soto";

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
		let numCars = 5;
		let manufacturer = "Honda";

		// Strings (use '' or "")
		let typeCar = `2025 ${manufacturer}`;
		console.log(typeCar);
		// Booleans
		letiAmTired = true;

		// Arrays
		let myNameArray = ["Scott", "Janet", "Steve"];
		let myNumArray = [2, 4, 6, 8];
		let myMixedArray = ["Scott", 4, false, myNumArray];

		// Objects
		let myDog = {
			name: "Rufus",
			breed: "retriever",
			size: "large",
			age: 7,
		}
		// STEP 5: Typing (JavaScript is a loosely-typed language)
		console.log(typeof(myDog));
