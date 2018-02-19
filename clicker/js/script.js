$(function () {

  var clicks = 0;
  var score = $('.score-value');
  var cat = $('.field');

  updateScore = function () {
    score.text(clicks);
  }

  cat.on('click', function () {
    clicks++;
    updateScore();
  });

  $('.btn').on('click', function () {
    clicks = 0;
    updateScore();
  });

  updateScore();
});