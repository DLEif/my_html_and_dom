function MultipleChoiceTopic(name, answer, scoreUnit) {
  Topic.call(this, name, answer, scoreUnit);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);

MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;
//
MultipleChoiceTopic.prototype.calculate = function (document) {
// Promotion.getMoreSelete = function(moreSelete, answer, goal) {
  var array = [];
  // var score = 0;
  var moreSeleteAnswer = document.getElementsByName(moreSelete);

  _.forEach(moreSeleteAnswer, function(seleteAnswer) {
    if (seleteAnswer.checked === true) {
      array.push(seleteAnswer.value);
    }
  });

  if (array.toString() === answer) {
    score += goal;
  }

  return score;
};
//
//   var isDifferentArray = function (arrayA, arrayB) {
//     var diffA = _.difference(arrayA, arrayB);
//     var diffB = _.difference(arrayB, arrayA);
//
//     var diff = diffA.concat(diffB);
//
//     return _.isEmpty(diff);
//   };
//
//   var checkboxElements = document.getElementsByName(this.name);
//
//   var checkedElements = _.filter(checkboxElements, { checked: true });
//
//   var answers = _.pluck(checkedElements, 'value');
//
//   var isCorrectAnswer = isDifferentArray(this.answer, answers);
//
//   this.score = isCorrectAnswer ? this.scoreUnit : 0;
// };
