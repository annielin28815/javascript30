# Day03 - Scoped CSS Variables and JS

> JavaScript30 是一個線上的教學課程，利用三十天的時間每天實作一個簡單的 JS 作品並自身初學者的角度講解相關概念。
> 詳見教學網站：https://JavaScript30.com。
> 原 GitHub 位址：https://github.com/wesbos/JavaScript30

### 摘要

- 在 HTML 的標籤上定義變數，並利用 Javascript 抓取、更新變數，以達成改變頁面上的圖片效果。
- 練習完成畫面
  ![day03預覽圖](https://i.imgur.com/qGVzg7O.png)

### HTML 概念

- 上方有大標題與控制 bar。
- 下方為圖片與圖片框線。

### CSS 概念

- 使用`:root`(是 DOM 元件的根元素，相當於`<html>`)可以全域規範常用變數。

```css=
// 設定方法
:root {
    --base: #f19483;
    --spacing: 10px;
    --blur: 10px;
    --background: #734338;
}

// 使用方法
img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
}
```

- `filter:blur()` 是模糊效果的屬性設定。括弧裡的值可以為 0 或 **px、**rem 等單位以決定模糊程度。

```css=
filter: contrast(200%);       // 對比
filter: grayscale(80%);       // 灰階程度
filter: hue-rotate(90deg);    // 色調轉換
filter: drop-shadow(16px 16px 20px red) invert(75%);    // 陰影
```

### JavaScript 概念

- `this.dataset.sizing` 可以在取到目標的值之後，加上 px 值才可以運做。本範例是為了抓取`data-sizing="px"`。
- 設定 property，因為要有彈性--${this.name}包含 scale,base 和 spacing，而 this.value 則為數值。

```javascript=
document.documentElement.style.setProperty(--${this.name}`,this.value+suffix);
```
