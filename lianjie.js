function checkform(){
  var score = 0;
  var corret = ["封装性","继承性","多态性"];
  JudgeNull.judgeNull();

  var totalInput = Promotion.getInput1("fullName", "统一建模语言", 15) +
                   Promotion.getInput2(["property1", "property2", "property3"], corret, 15);

  var totalSelete = Promotion.getSelete("abc", "B", 5) + Promotion.getSelete("cba", "A", 5);

  var totalMoreSelete = Promotion.getMoreSelete("classify", "A,B,D", 10) + Promotion.getMoreSelete("comprise", "A,B,C", 10);

  var totalJudge = Promotion.getJudge("judge1", "false", 10) + Promotion.getJudge("judge2", "true", 10);

  var totalText = Promotion.getText('talk', 20);

  score = totalInput + totalSelete + totalMoreSelete + totalText + totalJudge;

  document.getElementById("print").value = score;

}
