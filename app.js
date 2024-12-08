function sum (numbers) {
    // create new variable to hold sum of array
    let total = 0;
    // if numbers array is empty, return 0
    if (!numbers) {
        return 0;
    } else {
        // iterate through numbers array
        numbers.forEach(el => {
            // add each array element to the new variable that holds sum
            total += el;
        });
        // return new variable that holds sum
        return total;
    }
  }
 