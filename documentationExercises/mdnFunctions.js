//Async Function
//The async function declaration declares an async function where the await keyword is permitted within the function body.
//The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the 
//need to explicitly configure promise chains. //


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  // asyncCall();  
  