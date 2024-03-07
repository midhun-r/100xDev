/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTimeUsingDateClass(startIndex,endIndex) {
    const timer = new Date();
    let startTime = timer.getMilliseconds();
    let sum = 0;
    for(let i = startIndex; i<endIndex; i++ ) {
        sum +=i;
    }
    let endTime = timer.getMilliseconds();
    let timeRequired = endTime-startTime;
        timeRequired = timeRequired/1000;
    console.log("Time to calculate sum from"+startIndex+" to "+endIndex+" is "+timeRequired+"seconds.")
}

calculateTimeUsingDateClass(1,100); 
calculateTimeUsingDateClass(1,100000); 
calculateTimeUsingDateClass(1,1000000000);

/*
//for more precise timing using performance.now()

function calculateTimeUsingPerfomrancenow(startIndex, endIndex) {
    const startTime = performance.now(); 
    let sum = 0;
    for (let i = startIndex; i < endIndex; i++) {
      sum += i;
    }
    const endTime = performance.now();
    const timeRequired = (endTime - startTime) / 1000;
    console.log("Time to calculate sum from " + startIndex + " to " + endIndex + " is " + timeRequired + " seconds.");
  }

calculateTimeUsingPerfomrancenow(1,100); //Time to calculate sum from 1 to 100 is 0.0005300320014357567 seconds.
calculateTimeUsingPerfomrancenow(1,100000); //Time to calculate sum from 1 to 100000 is 0.008261704999953509 seconds.
calculateTimeUsingPerfomrancenow(1,1000000000); //Time to calculate sum from 1 to 1000000000 is 0.7615243190005422 seconds.

*/
