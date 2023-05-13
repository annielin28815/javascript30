// 將全域環境中的 SpeechRecognition 指好(依據不同瀏覽器)
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// 建立一個變數 recognition 來放為語音識別功能
const recognition = new SpeechRecognition();

// 讓語音識別回傳識別後的資訊（預設為false)
recognition.interimResults = true;
recognition.lang = 'en-US';

// 建立一個 p 元素在 HTML 設定好的文字區中
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  // 將回傳資料先轉為 array 來操作
  const transcript = Array.from(e.results)
    // 透過map取得回傳陣列中的第0筆
    .map(result => result[0])
    // 在取得第0筆中的transcript
    .map(result => result.transcript)
    // 用join把連結符號消掉
    .join('');

  // 把回傳內容塞到p元素中
  p.textContent = transcript;

  // 如果回傳內容已經結束（一段話的結尾）在建立一個新的p元素來放下一段文字
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

// 監聽如果語音識別結束，則在開啟一次新的識別
recognition.addEventListener('end', recognition.start);

// 開始識別
recognition.start();