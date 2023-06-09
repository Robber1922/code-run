const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const N = parseInt(line);

  // Список для хранения последовательности чисел
  const sequence = [1];
  let current = 1; // Текущее число
  let operations = 0; // Количество операцийconst readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (line) => {
    const N = parseInt(line);

    const dp = new Array(N + 1).fill(Infinity);
    dp[1] = 0;

    for (let i = 1; i <= N; i++) {
      if (i * 2 <= N) {
        dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
      }
      if (i * 3 <= N) {
        dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
      }
      dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
    }

    const operations = dp[N];
    const sequence = [];

    let current = N;
    while (current > 1) {
      sequence.unshift(current);
      if (dp[current] === dp[current - 1] + 1) {
        current--;
      } else if (current % 2 === 0 && dp[current] === dp[current / 2] + 1) {
        current /= 2;
      } else if (current % 3 === 0 && dp[current] === dp[current / 3] + 1) {
        current /= 3;
      }
    }
    sequence.unshift(1);

    console.log(operations);
    console.log(sequence.join(" "));
    rl.close();
  });

  while (current < N) {
    // Проверяем условия и выбираем наименьшую операцию
    if (current * 3 <= N) {
      current *= 3;
    } else if (current * 2 <= N) {
      current *= 2;
    } else {
      current += 1;
    }

    sequence.push(current);
    operations++;
  }

  console.log(operations);
  console.log(sequence.join(" "));
  rl.close();
});
