# Drum kit

> JavaScript30 是一個線上的教學課程，利用三十天的時間每天實作一個簡單的 JS 作品並自身初學者的角度講解相關概念。
> 詳見教學網站：https://JavaScript30.com。
> 原 GitHub 位址：https://github.com/wesbos/JavaScript30

### 摘要

- 透過 JavaScript 使鍵盤按下相對應的英文字母後，播放出對應按鍵的聲音，並同時產生一個特效，在按下其他鍵後會關閉該特效，並於新按鍵中啟用。

- 練習完成畫面

![day01預覽圖](https://i.imgur.com/JsjKugV.jpg)

### HTML 概念

- HTML 的 audio 標籤

  `<audio src="sound/test.mp3"></audio>`

- 透過 javascript 來操作： 1.`element.play()`進行播放 2.`element.currentTime`指定播放秒數

### CSS 概念

- flex 基本用法:
  `align-items : center; //垂直置中`
  `justify-content:center; //水平置中`

- transition 動畫效果用法: property duration timing-function delay;ex:transition:all 0.07s ease 1. property:有 width, color... 2. timing function:
  `ease cubic-bezier(0.25, 0.1, 0.25, 1.0)`
  `liner cubic-bezier(0.0, 0.0, 1.0, 1.0)`
  `ease-in cubic-bezier(0.42, 0.0, 1.0, 1.0)`
  `ease-out cubic-bezier(0.0, 0.0, 0.58, 1.0)`
  `ease-in-out cubic-bezier(0.42, 0.0, 0.58, 1.0)`

### JavaScript 概念

- 利用輸入鍵盤的案件事件 keydown 觸發功能，利用 keyCode 取值，並將 keyCode 的值對應到 data-key，接者對相對應的` audioaudio[data-key="${e.keyCode}"]`放出音樂 `audio.play()`。
  `window.addEventListener('keydown', playsound);`
- 可以把音樂撥放時間重置 `audio.currentTime = num`
- 利用`selector.classList.add('playing')`，可將選定的標籤加入 class 的後綴字；同理用 `selector.classList.remove('playing')`可移除選定的 class 後綴字。
- 事件`transitionend`使用方式:當使用過`transition`後執行 callback 內容。
