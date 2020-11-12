window.addEventListener('load', function() {
  let titles = document.getElementsByClassName('problem-title');

  for (let i = 0; i < titles.length; ++i) {
    let key = titles[i].innerText;
    let solveStatus = window.localStorage.getItem(key) || '';
    titles[i].innerHTML += solveStatus;
  }
});
