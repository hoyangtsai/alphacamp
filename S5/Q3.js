
// 1. 三邊和必須小於等於 20，所以最大的等腰三角形的長邊是9
// 2. 有效的三邊形是 「任兩邊之和 > 第三邊」「任兩邊之差 < 第三邊」

function init() {
  let count = 0;
  // i 是兩邊相等邊長
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; i + i + j <= 20; j++) {
      if (i == j) continue; // 避免正三角形，跳過執行下一次loop

      if (i + i > j && i + j > i && // 任兩邊之和 > 第三邊
        Math.abs(i - j) < i) // 任兩邊之差 < 第三邊 (i - i = 0，j開始於1，所以不用判斷 i - i < j)
      {
        console.log(`發現等腰三角形！三邊長分別為：${i}、${i}、${j}`);
        count++;
      }
    }
  }

  console.log(`共找到 ${count} 組等腰三角形`);
}

init();
