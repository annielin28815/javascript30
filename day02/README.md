# Day02 - JS + CSS Clock

> JavaScript30 是一個線上的教學課程，利用三十天的時間每天實作一個簡單的 JS 作品並自身初學者的角度講解相關概念。
> 詳見教學網站：https://JavaScript30.com。
> 原 GitHub 位址：https://github.com/wesbos/JavaScript30

### 摘要

- 以 JS 及 CSS 實作時鐘。
- 練習完成畫面
  ![day02預覽圖](https://i.imgur.com/FyuMr5J.png)

### HTML 概念

- 使用 div 分層包覆時鐘框線與時針、分針、秒針。

### CSS 概念

- 橫線使用`transform:rotate(90deg);`會變成直線，預設情況下，會以中心點當作軸心旋轉(50%)，若要移動軸心則要使用`transform-origin:100%`(最右側)。
- transition 動畫效果用法: ease 可當作動畫的呈現效果。

### JavaScript 概念

- 設置每次執行時間 `setInterval(setDate, 1000)`，設置每次執行時的內容。
- 取時間使用`now = new Date()`, 可以取得的分秒時 `now.getSeconds()`。
