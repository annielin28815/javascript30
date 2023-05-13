// 透過 Array.from 將 querySelectorAll 取回的全部時間值 NodeList 轉 Array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// 加總取回的資料(轉換為秒數)
const seconds = timeNodes
  // 取出每個元素中的 data-time 資料
  .map(node => node.dataset.time)
  .map(timeCode => {
    // 用解構賦值的方式分別取出 split(':') 後的分與秒，再透過一個 map 執行 parseFloat 將字串轉數值
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    // 回傳該組資料轉換後的總秒數
    return (mins * 60) + secs;
  })
  // 再用 reduce 加總每次執行結果
  .reduce((total, vidSeconds) => total + vidSeconds);

// 利用取得的總秒數來進行總共時分秒的計算、用 Math.floor 取整數，再利用 % 來操作餘數
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log('時分秒 =>', hours + `:` + mins + `:` + secondsLeft);