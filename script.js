try{
  // This line is commented out, but if uncommented, it would throw a generic error with a custom message
  // throw new Error ("error hai bhai");

  // This line is also commented out, but if uncommented, it would throw a reference error with a custom message
  // throw new ReferenceError("ref error hai bhai");

  // Prompt the user to enter a speed value
  let speed = prompt("enter the speed");

  // Convert the entered speed to a number
  speed = Number.parseInt(speed)

  // If the entered speed is greater than 400, throw a reference error with a custom message
  if(speed > 400){
    throw new ReferenceError("even bugatti doesn't go that fast");
  }

  // This line is commented out, but if uncommented, it would cause a reference error because chaxzer is not defined
  // chaxzer 
}
catch(error){
  // Log the name, message and stack trace of the error to the console
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}
// Log a message to the console indicating that the script is still running despite the error
console.log ("The script is still running")


