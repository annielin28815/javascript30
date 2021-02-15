# Drum kit

> JavaScript30 是一個線上的教學課程，利用三十天的時間每天實作一個簡單的 JS 作品並自身初學者的角度講解相關概念。
> 詳見教學網站：https://JavaScript30.com。
> 原 GitHub 位址：https://github.com/wesbos/JavaScript30

### 摘要

- 利用輸入鍵盤的案件事件 keydown 觸發功能，利用 keyCode 取值，並將 keyCode 的值對應到 data-key，接者對相對應的` audioaudio[data-key="${e.keyCode}"]`放出音樂 `audio.play()`。
  `window.addEventListener('keydown', playsound);`
- 可以把音樂撥放時間重置 `audio.currentTime = num`
- 利用`selector.classList.add('playing')`，可將選定的標籤加入 class 的後綴字；同理用 `selector.classList.remove('playing')`可移除選定的 class 後綴字。
- 事件`transitionend`使用方式:當使用過`transition`後執行 callback 內容。

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

- 可以直接註冊標籤，並在 css 內敘述標籤功能。
