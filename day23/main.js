
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// 使 HTML 中的輸入欄位成為 SpeechSynthesisUtterance 要使用的值
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  // 將所有語系塞進下拉選單中
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    // 使用 filter 篩選出包含 zh 及 en 的語系
    .filter(voice => voice.lang.includes('en'))
    // 篩選後的array透過map把資料組成html
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    // 用join來合併且消除原本陣列的逗點
    .join('');
}

// 設定選擇的發音語系
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

// 播放切換
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// 設定速率跟音準
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

// 監聽語系選單，選擇後切換語系
voicesDropdown.addEventListener('change', setVoice);

// 監聽速率跟音準控制條，移動後設定
options.forEach(option => option.addEventListener('change', setOption));

// 播放按鈕
speakButton.addEventListener('click', toggle);

// 停止按鈕
stopButton.addEventListener('click', () => toggle(false));

