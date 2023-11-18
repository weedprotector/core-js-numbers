function getCountOfOddNumbers(number) {
    let counter = 0;
    for (let i = 1; i <= number; i += 1) {
      if (i % 2 === 1) {
        counter += 1;
      }
    }
    console.log( counter);
  }

  getCountOfOddNumbers(0)