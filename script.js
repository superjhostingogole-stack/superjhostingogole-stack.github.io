document.addEventListener("DOMContentLoaded", function() {
    const heartBtn = document.getElementById('heartBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');

    if (heartBtn && hiddenMessage) {
        heartBtn.addEventListener('click', function() {
            hiddenMessage.style.display = 'block';
            heartBtn.style.display = 'none';
        });
    }
});
