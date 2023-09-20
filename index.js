function countDown(enterednumber) {
  if (enterednumber <= 0 || !Number.isInteger(enteredumber)) {
    console.log("Please provide a positive integer as input.");
    return;
  }
 while (enterednumber >= 0) {
    console.log(enterednumber);
    enterednumber--;
  }
}





