// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textをいうidを持つhtml要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素をクリックされた時にイベント処理を実行
btn.addEventListener('click',()=> {
  // 2秒後に「ボタンをボタンをクリックしました」を表示する
  setTimeout(() =>{
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});