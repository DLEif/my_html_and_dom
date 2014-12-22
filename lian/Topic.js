function Question(topicName, standardAnswer, goal){
  this.topicName = topicName;
  this.standardAnswer = standardAnswer;
  this.goal = goal;
  this.score = 0;
}
Question.all = function() {
  return Answer.buildTopics();
};

Question.prototype.countScore = function () {

};
