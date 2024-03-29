/*  單純使用scroll來操作的話，每次的畫面滾動都會有大量事件被觸發，
    會對效能上造成影響，所以作者多寫了一個debounce來使觸發間隔為20毫秒以上
*/
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// 先取得所有.slide-in的圖片元素
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // 取得圖片1/2高度的定位點（卷軸垂直位移量＋視窗高度）- 1/2圖片高度
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // 取得圖片底部定位點（利用圖片頂部定位點+圖片高度取得）
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // 判斷視窗是否已經超過圖片高度一半
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // 判斷滾動範圍是否已經超過圖片底部（卷軸垂直位移量）
    const isNotScrolledPast = window.scrollY < imageBottom;
    // 判斷是否超過圖片一半高，且視窗尚未超過圖片底部來增加或移除css效果
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));