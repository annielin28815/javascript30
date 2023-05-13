const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  // 透過 navigator.mediaDevices.getUserMedia 取得 user 的視訊裝置，回傳 Promise 狀態
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    // 如果允許則把回傳的MediaStream寫進html的video tag中並播放
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    // 失敗時印出錯誤結果
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  // 用 setInterval 來持續取得目前的影像資訊
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // 透過getImageData取得當前canvans中所有的像素點(r,g,b,alpha的資訊)
    let pixels = ctx.getImageData(0, 0, width, height);
    // 製作效果
    pixels = redEffect(pixels); // 紅色濾鏡效果
    // 置入效果
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // 拍照的音效 -> 把音效切到第0秒並播放
  snap.currentTime = 0;
  snap.play();

  // 利用toDataURL把canvas的內容轉為base64的圖檔資訊
  const data = canvas.toDataURL('image/jpeg');
  // 用createElemamnt來建立一個新的a元素
  const link = document.createElement('a');
  // 設置連結位置為轉圖檔後的 base64 位置
  link.href = data;
  // 設置連結為下載
  link.setAttribute('download', 'handsome');
  // 內部新增一個預覽圖
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  // 在圖片區塞入新圖片（在第一筆的位置）
  strip.insertBefore(link, strip.firsChild);
}

function redEffect(pixels) {
  // 透過迴圈將取回的所有像素資料跑一次，i += 4 是因為四個一組(r,g,b,alpha）
  for(let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);