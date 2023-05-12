import './index.html';
// new modules
import './index.scss'; // Добавлять библиотеки до своих стилей, чтоб можно было перекрыть

//use modules
const videoBG = document.querySelector('.video-bg');
videoBG.innerHTML = `
  <source src="video/video.mp4" type="video/mp4">
  <source src="video/video.webm" type="video/webm">
`;