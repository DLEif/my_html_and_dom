function Fill(topicName, standardAnswer, goal) {
  Question.call(this, topicName, standardAnswer, goal);
}

Fill.prototype = Object.create(Question.prototype);
Fill.prototype.getInput = Fill;

Fill.getInput = function(inputAnswers) {

  var score = 0;
  var standardAnswer = [];

  _.forEach(inputAnswers, function(inputAnswer) {
    standardAnswer.push(inputAnswer.value);
  });

  _.forEach(answers, function(answer) {
    var modelAnswer = _.contains(standardAnswer, answer);
    if (modelAnswer) {
      score += goal / standardAnswer.length;
    }
  });
  return score;
};
