function TrueOrFalseTopic(name, answer, scoreUnit) {
  Topic.call(this, name, answer, scoreUnit);
}

TrueOrFalseTopic.prototype = Object.create(Topic.prototype);

TrueOrFalseTopic.prototype.constructor = TrueOrFalseTopic;

TrueOrFalseTopic.prototype.calculate = function (document) {

  var convertAnswerToBoolean = function (answer) {

    if (answer === 'V') {
      return true;
    }

    if (answer === 'X') {
      return false;
    }

    return undefined;
  };

  var radioElements = document.getElementsByName(this.name);

  var checkedElement = _.find(radioElements, { checked: true });
  if (checkedElement) {
    this.score = this.answer === convertAnswerToBoolean(checkedElement.value) ? this.scoreUnit : 0;
  }
};

// Promotion.getJudge = function(judge, answer, goal) {
//   var score = 0;
//   var judgeAnswer = document.getElementsByName(judge);
//
//   for (var i = 0; i < judgeAnswer.length; i++) {
//     if (judgeAnswer[i].checked === true && judgeAnswer[i].value === answer) {
//       score = goal;
//     }
//   }
//   return score;
// };
