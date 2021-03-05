'use strict';

/*--タイピング--*/ 
ityped.init('#typist', {
    strings: ['Portfolio'],
    typeSpeed: 200,
    backSpeed:  100,
    startDelay: 300,
    backDelay:  1000,
    loop: true,
    showCursor: true,
});

/*要素をフワッと表示させるjs*/ 
/**
 * 到達したら要素を表示させる
 */
function showElementAnimation() {

    var element = document.getElementsByClassName('js-animation');
    if(!element) return; // 要素がなかったら処理をキャンセル
    
    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);


/*---- ipad pc表示 ----*/ 
document.addEventListener('DOMContentLoaded', function() {
    // タブレット端末かどうかを判定
    var ua = navigator.userAgent
    var isSmartPhone = ua.indexOf('iPhone') > -1 ||
        (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)
    var isTablet = !isSmartPhone && (
        ua.indexOf('iPad') > -1 ||
        (ua.indexOf('Macintosh') > -1 && 'ontouchend' in document) ||
        ua.indexOf('Android') > -1
    )
    // タブレット端末でのみ最小幅を設定
    if (isTablet) ViewportExtra.setContent({ minWidth: 1024 })
})