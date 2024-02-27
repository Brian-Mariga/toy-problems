function solution(N) {
  if (N >= 0) {
    const binary = N.toString(2);
    // console.log(binary);
    let gap = 0;
    let maxGap = 0;
    let counter = false;

    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "1") {
        if (gap > maxGap) {
          maxGap = gap;
        }
        gap = 0;
        counter = true;
      } else if (counter) {
        gap++;
      }
    }
    // console.log(maxGap);
    return maxGap;
  } else {
    console.log("Enter a positive number");
    return "Enter a positive number";
  }
}
