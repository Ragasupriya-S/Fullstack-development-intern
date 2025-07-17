const names = ["supriya", "merlin", "devika"]; // const because we won't reassign the array itself

console.log("Initial names:", names);

// We can modify the contents of the array even though it's declared with const
names.push("riya");
console.log("After adding a name:", names);

let vegetables = ["Carrot", "Tomato"]; // let because we may reassign a new array
console.log("Initial vegetables:", vegetables);

// Reassign a new array to vegetables
vegetables = ["Potato", "Onion", "Spinach"];
console.log("Updated vegetables:", vegetables); 

