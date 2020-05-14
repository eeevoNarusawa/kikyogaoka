$('.slider').slick({
  // centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
  // centerPadding: '5%', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。
  autoplay: true, // 自動再生を設定
  autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
  speed: 2000, // スライド/フェードアニメーションの速度を設定
  infinite: true, // スライドのループを有効にするか
  slidesToShow:1, //表示する画像枚数
  slidesToScroll:1, //スライドする画像枚数
});
