const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  // 避免每次submit都會重整網頁
  e.preventDefault();
  // 利用再次 querySelector 來選取 form 中的 input 欄位值
  const text = (this.querySelector('[name=item]')).value;
  // 宣告新增要存入的物件，是輸入的文字與是否勾選的狀態(done)
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  // 清空輸入欄位
  this.reset();
}

// 在 function 中的參數直接設定參數預設值
function populateList(plates = [], platesList) {
  // 使用 map 搭配 join 來組成字串，並顯示在 html 的清單 ul 中
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
  `;
  }).join('');
}

function toggleDone(e) {
  /* skip this unless it's an input
  * 偵測進來的點擊是input(checkbox)才動作
  */
  if (!e.target.matches('input')) return;
  // 取得checkbox的data-index值
  const el = e.target;
  const index = el.dataset.index;
  // 利用！來使done的狀態在true/false間切換
  items[index].done = !items[index].done;
  // 將更新後的狀態寫入localStorage中
  localStorage.setItem('items', JSON.stringify(items));
  // 更新列表
  populateList(items, itemsList);
}

// 監聽 submit 按鈕
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

