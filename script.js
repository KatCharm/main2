document.getElementById('intro-video').addEventListener('ended', function() {
    // При завершенні відео показати звичайний контент
    document.getElementById('content').classList.remove('hidden');
});
