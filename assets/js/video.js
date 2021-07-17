//  get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');

const togglePlay = video => e => video.paused ? video.play() : video.pause();

const updateButton = (buttonNode, videoNode) => e =>
  (buttonNode.textContent = videoNode.paused ? '►' : '❚ ❚');

video.addEventListener('click', togglePlay(video));
video.addEventListener('play', updateButton(toggle, video));
video.addEventListener('pause', updateButton(toggle, video));

toggle.addEventListener('click', togglePlay(video));
