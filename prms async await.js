//  Function 
function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Authenticating user...");

    setTimeout(() => {
      if (username === "priya" && password === "1234") {
        resolve("Login successful!");
      } else {
        reject("Invalid credentials.");
      }
    }, 2000); // 2 second delay
  });
}

//Use async/await to call the async function
async function login() {
  try {
    const result = await authenticateUser("priya", "1234");
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Step 3: Call the login function
login();
