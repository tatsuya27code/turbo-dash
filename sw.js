// 冒頭に追加
let gameState = 'TITLE';
let isPaused = false; // 一時停止中かどうかを覚える変数

document.getElementById('stop-button').addEventListener('click', () => {
    isPaused = !isPaused; // 押すたびに「停止/再開」を切り替える
    
    if (isPaused) {
        document.getElementById('stop-button').innerText = 'RESUME'; // 再開ボタンに文字を変える
    } else {
        document.getElementById('stop-button').innerText = 'STOP';
    }
});


// ボタンクリックでゲーム開始
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('ui-layer').style.display = 'none';
    gameState = 'PLAYING';
    // ここでゲームの初期化関数（あれば）を呼ぶ
});

const CACHE_NAME = 'turbo-dash-v1';
const ASSETS = [
  'turbo_dash.html',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
