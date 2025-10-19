// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// クリックされた時にイベント処理を取得する
btn.addEventListener('click',() => {
  // 「ボタンをクリックしました」というテキストに変更
  text.textContent = 'ボタンをクリックしました';

});