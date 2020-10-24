$('video, audio').mediaelementplayer({
  features: ['playpause', 'fullscreen', 'volume', 'tracks', 'progress'],
  startLanguage: 'en',
});

const origVideo = document.querySelector('#origVideo_html5');
const spans = document.querySelectorAll('.transcript span');

origVideo.ontimeupdate = (event) => {
  let curTime = event.target.currentTime;

  spans.forEach((item) => {
    if (item.dataset.start < curTime && item.dataset.end > curTime) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
};

spans.forEach((item) => item.addEventListener('click', startTime));

function startTime(event) {
  const start = event.target.dataset.start;
  origVideo.currentTime = start;
}
