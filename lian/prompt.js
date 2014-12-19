function JudgeNull() {
  this.input = input;
  this.answer = anwser;
}

JudgeNull.getjudgeNull = function() {
  var personName = document.getElementById("name").value;
  var personId = document.getElementById("id").value;
  var personClass = document.getElementById("class").value;
  if(personName === ''|| personId === '' || personClass === ''){
    alert("Please improve personal information.");
  }
};

JudgeNull.getText = function(text, goal) {
  var score = 0;
  var input = document.getElementById(text).value;

  if (input === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种" +
    "表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。") {
      score = goal;
    }
    return score;
  };
