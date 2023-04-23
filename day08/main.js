const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';  // 線條顏色
ctx.lineJoin = 'round'; // 線條連接樣式
ctx.lineCap = 'round';  // 線條結束樣式
ctx.lineWidth = 70; // 線條寬度

let isDrawing = false;  // 判斷是否執行畫圖中
let lastX = 0;
let lastY = 0;
let hue = 0;  // 色相值，於hsl中使用
let direction = true; // 判斷粗細增減用

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  // 設定線條顏色為 hsl 模式，吃變數 hue
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // 起始畫圖路徑
  ctx.beginPath();
  // 把路徑指針移動到 X, Y 點變數中
  ctx.moveTo(lastX, lastY);
  // 把起始點和目前滑鼠位置的 X, Y 用線條連接起來
  ctx.lineTo(e.offsetX, e.offsetY);
  // 畫出線條
  ctx.stroke();
  // 把路徑放到 X, Y 點變數中
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // 顏色的變化效果
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  /* 線條寬度的變化效果
  * 如果寬度達到指令值，切換 direction
  */
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

// 抓取滑鼠按下的位置，放進 X, Y 點變數，而且讓 isDrawing 為 true
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// 滑鼠移動
canvas.addEventListener('mousemove', draw);
// 滑鼠放開
canvas.addEventListener('mouseup', () => isDrawing = false);
// 滑鼠離開
canvas.addEventListener('mouseout', () => isDrawing = false);