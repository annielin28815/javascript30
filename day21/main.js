// 取得 HTML 中的元素
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// 使用 watchPosition 來取得使用者的地理位置及海拔、速度
navigator.geolocation.watchPosition((data) => {
  // 若成功取回，則會回傳一組 Position (這裡定義名稱為 data)
  console.log(data);
  // 使用 coords.speed 取回速度(公尺/秒)
  speed.textContent = data.coords.speed;
  // 使用 coords.heading 取得方位，代表偏離北方的角度，0為正北、90為正東
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  // 錯誤回傳訊息，例如未取得定位授權時
  console.error(err);
});