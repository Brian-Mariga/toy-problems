function solution(A, K) {
  //   console.log(A);
  //   let last = A.pop();
  //   console.log(last);
  //   A.unshift(last);
  //   console.log(A);

  const n = A.length;

  if (n === 0 || K === 0) {
    return A;
  } else {
    const numOfRotations = K % n;
    if (numOfRotations === 0) {
      return A;
    } else {
      for (let i = 0; i < numOfRotations; i++) {
        let last = A.pop();
        A.unshift(last);
      }
      return A;
    }
  }
}

console.log(solution([1, 2, 3, 4, 5], 1));
