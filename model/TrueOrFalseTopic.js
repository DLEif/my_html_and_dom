function TrueOrFalseTopic(topicName, standardAnswer, goal) {
  Question.call(this, topicName, standardAnswer, goal);
}

TrueOrFalseTopic.prototype = Object.create(Question.prototype);

TrueOrFalseTopic.prototype.constructor = TrueOrFalseTopic;

TrueOrFalseTopic.prototype.countScore = function(inputAnswers) {
  var score = 0;
  var judgeAnswers = inputAnswers();
  var _this = this;
  
  _.forEach(judgeAnswers, function(judgeAnswer){
    if (judgeAnswer.checked === true && judgeAnswer.value === answer) {
      score = _this.goal;
    }
    return score;
  });
};


// TrueOrFalseTopic.prototype.calculate = function (document) {
//
//   var convertAnswerToBoolean = function (answer) {
//
//     if (answer === 'V') {
//       return true;
//     }
//
//     if (answer === 'X') {
//       return false;
//     }
//
//     return undefined;
//   };
//
//   var radioElements = document.getElementsByName(this.name);
//
//   var checkedElement = _.find(radioElements, { checked: true });
//   if (checkedElement) {
//     this.score = this.answer === convertAnswerToBoolean(checkedElement.value) ? this.scoreUnit : 0;
//   }
// };
