const spinner = function() {
  const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      if (i === 9) {
        console.log();
      } else {
        process.stdout.write(spinnerArray[i % 4]);
      }
    }, 100 + i * 200);
  }
};

spinner();