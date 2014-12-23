function ShortAnswerTopic(topicName, standardAnswer, goal) {
  Question.call(this, topicName, standardAnswer, goal);
}
ShortAnswerTopic.prototype = Object.create(Question.prototype);

ShortAnswerTopic.prototype.constructor = ShortAnswerTopic;

ShortAnswerTopic.prototype.countScore = function (inputAnswers) {
  var _this = this;
  
  if (input === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种" +
    "表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。") {
      score = this.goal;
    }
    return score;
  };
