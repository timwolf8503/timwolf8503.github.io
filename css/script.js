// 獲取菜單圖示和菜單
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// 當菜單按鈕被點擊時，切換選單顯示狀態
menuToggle.addEventListener('click', function() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');  // 顯示選單
    } else {
        menu.classList.add('hidden');  // 隱藏選單
    }
});