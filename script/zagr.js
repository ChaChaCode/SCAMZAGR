// Функция для предзагрузки изображений
function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

// Функция для предзагрузки фреймов
function preloadIframe(url) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none'; // Прячем фрейм
    iframe.src = url;
    document.body.appendChild(iframe);
}

// Запускаем предзагрузку при начале загрузки основного фрейма
window.addEventListener('DOMContentLoaded', function() {
    // Пример предзагрузки фреймов
    preloadIframe('boost.html');
    preloadIframe('energy.html');
    preloadIframe('main.html');
    preloadIframe('info.html');
    preloadIframe('invite.html');
    preloadIframe('leadersbord.html');
    preloadIframe('map-top.html');
    preloadIframe('multitap.html');
    preloadIframe('tapbot.html');
    preloadIframe('task.html');
    preloadIframe('upgrade.html');

    // Загрузка основного фрейма
    const mainFrame = document.getElementById('main-frame');
    if (mainFrame) {
        mainFrame.src = 'index.html';

        // Перенаправляем на index.html после полной загрузки
        mainFrame.onload = function() {
            console.log('Main frame loaded, redirecting to main.html');
            window.location.href = 'main.html';
        };

        // Добавляем обработчик ошибок для отладки
        mainFrame.onerror = function() {
            console.error('Error loading main frame');
        };
    } else {
        console.error('Main frame not found');
    }
});
