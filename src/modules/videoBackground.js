export const videoBackgroundInit = () => {
  const videoBGElems = document.querySelectorAll('.video-bg');

  const videoHTML = `
  <source src="video/video.mp4" type="video/mp4">
  <source src="video/video.webm" type="video/webm">
`;

  for (const videoElem of videoBGElems) {
    videoElem.innerHTML = videoHTML;
  }
};
