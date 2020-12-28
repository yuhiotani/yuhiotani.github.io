

//対象とするクラスを全て取得
let fadeInTarget = document.querySelectorAll('.fade-in');


//スクロールイベントを宣言
window.addEventListener('scroll', () => {
  
  //fade-inクラスを繰り返し処理
  for (let i = 0; i < fadeInTarget.length; i++){
    
    //ビューポイントからのターゲットまでの位置を取得
    const rect = fadeInTarget[i].getBoundingClientRect().top;  //getBoundingClientRectはターゲット要素をの位置をブラウザの表示領域の左上を(0, 0)として、そこからの相対位置で示される。
    
    //ウィンドウのスクロール量(Y軸）を取得します。
    const scroll = window.pageYOffset || document.documentElement.scrollTop; 
    
    //ビューポイントからの距離＋ドキュメントからの距離
    const offset = rect + scroll;
    
    //
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ(下端で判断したい場合に利用)
    
    if (scroll > offset - windowHeight + 400) {
      
      fadeInTarget[i].classList.add('scroll-in');
    }
    
  }
  
});