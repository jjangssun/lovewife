document.addEventListener('DOMContentLoaded', function () {
    const playVideoButton = document.getElementById('play-video');
    const videoContainer = document.getElementById('video-container');
    const videoIframe = videoContainer.querySelector('iframe');

    playVideoButton.addEventListener('click', function () {
        videoContainer.style.display = 'block';
        videoIframe.src = 'https://www.youtube.com/embed/NRSoKbagloU';
        playVideoButton.style.display = 'none';
    });
});
