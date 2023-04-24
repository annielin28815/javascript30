const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // 是否按著 shift key
  let inBetween = false;
  // 檢查是否按著 shift key 點選
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(item => {
      // 把從「上一個點選的 checkbox 開始，記錄到最後一個點選的」進行標記
      console.log(item);
      if (item === this || item === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }
      // 勾選區間內 如果是 true 的 checkbox，維持為勾選著的
      if (inBetween) {
        item.checked = true;
      }
    });
  }

  lastChecked = this;
}

// 將每個 checkbox 加上 click 事件
checkboxes.forEach(checkbox => 
  checkbox.addEventListener('click', handleCheck)
);