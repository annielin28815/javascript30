const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 500; // 500px

  function shadow(e) {
    // 透過解構賦值取得並設定資訊
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    // 如果在目標區域外，則在加上目標座標值
    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    // 四捨五入最終偏移值
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // 使用textShadow來設定文字陰影
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

  }

  hero.addEventListener('mousemove', shadow);