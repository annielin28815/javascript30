// 建立functionremoveTransition
// 1.判斷傳入的propretyName是否為transform，若否則退出
// 2.若為transform，則移除playing樣式
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

// 建立functionplaySound
// 1.利用傳入的e.keyCode來取得對應的audio標籤及該按鍵的div標籤
// 2.判斷傳入的e.keyCode是否有對應的audio標籤，若無則退出
// 3.使對應的div加上playing樣式，產生對應的典及特效
// 4.使對應的audio播放時間為0
// 5.播放對應的音檔
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // if (!audio) return;
  if(audio){
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

  }

}
// 新增click功能綁定至每個class="key"
const keys = Array.from(document.querySelectorAll('.key'));
// 新增transitionend listener
// 1.偵測所有包含className='key'的元件
// 2.當該元件觸發特效並結束時(transitionend)，呼叫removeTransition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// 新增keydown listener
window.addEventListener('keydown', playSound);