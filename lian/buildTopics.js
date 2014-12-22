function Answer(){

}
Answer.buildTopics = function () {
  return [
  new FillInTopic("1_1", ['统一建模语言'], 15),
  new FillInTopic("1_2", ["封装性", "继承性", "多态性"], 15),
  new ChoiceTopic("2_1", "B", 10),
  new ChoiceTopic("2_2","A", 10),
  new MultipleChoiceTopic("3_1", ['ABD'], 10),
  new MultipleChoiceTopic("3_2", ['ABC'], 10),
  new TrueOrFalseTopic("4_1", false, 10),
  new TrueOrFalseTopic("4_2", true, 10),
  new ShortAnswerTopic("5_1",20)
  ];
};
