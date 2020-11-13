const lottie = require('lottie-web');

var loading = lottie.loadAnimation({
  container: document.getElementById("loading"),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: `../assets/animation/loading.json`
})
