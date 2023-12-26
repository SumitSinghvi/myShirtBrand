import './src/styles/global.css'
// gatsby-browser.js
export const onClientEntry = () => {
  const linkSlick = document.createElement('link');
  linkSlick.href = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
  linkSlick.rel = 'stylesheet';
  linkSlick.type = 'text/css';
  document.head.appendChild(linkSlick);

  const linkFontAwesome = document.createElement('link');
  linkFontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  linkFontAwesome.rel = 'stylesheet';
  document.head.appendChild(linkFontAwesome);
};
