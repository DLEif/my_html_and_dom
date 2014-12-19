function Promotion(input, anwser) {
  this.input = input;
  this.answer = anwser;
}

Promotion.getInput1 = function(input, answers, goal) {
  var score = 0;
  var inputAnwser = document.getElementById(input).value;

  if (inputAnwser === anwser) {
    score += goal;
  }
  return score;

};

Promotion.getInput2 = function(ids, answers, goal) {

  var score = 0;
  var allAnwser = [];

  _.forEach(ids, function(id) {
    allAnwser.push(document.getElementById(id).value);
  });

  _.forEach(answers, function(answer) {
    var modelAnswer = _.contains(allAnwser, answer);
    if (modelAnswer) {
      score += goal / allAnwser.length;
    }
  });
  return score;
};

Promotion.getSelete = function(selete, anwser, goal) {
  var score = 0;
  var radio = document.getElementsByName(selete);

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked === true && radio[i].value === anwser) {
      score = goal;
    }
  }
  return score;
};

Promotion.getMoreSelete = function(moreSelete, anwser, goal) {
  var array = [];
  var score = 0;
  var moreSeleteAnwser = document.getElementsByName(moreSelete);

  _.forEach(moreSeleteAnwser, function(seleteAnwse) {
    if (seleteAnwse.checked === true) {
      array.push(seleteAnwse.value);
    }
  });

  if (array.toString() === anwser) {
    score += goal;
  }

  return score;
};

Promotion.getJudge = function(judge, anwser, goal) {
  var score = 0;
  var judgeAnwser = document.getElementsByName(judge);

  for (var i = 0; i < judgeAnwser.length; i++) {
    if (judgeAnwser[i].checked === true && judgeAnwser[i].value === anwser) {
      score = goal;
    }
  }
  return score;
};
