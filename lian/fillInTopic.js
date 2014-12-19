// function FillInTopic(input, anwser, goal){
//
//   this.input = input;
//   this.anwser = anwser;
//   this.inputsCount = inputsCount;
//
// }
//
// FillInTopic.prototype = Object.create(Topic.prototype);
//
// FillInTopic.prototype.inputsCount = FillInTopic;
//
// FillInTopic.prototype.calculate = function (document) {
//
//   var score = 0;
//   var corret = ["封装性","继承性","多态性"];
//   var inputAnwser = document.getElementById(input).value;
//
//   if (inputAnwser === anwser) {
//     score += goal;
//   }
//   return score;
//
// };
//
//   Promotion.getInput2 = function(ids, answers, goal) {
//
//     var score = 0;
//     var allAnwser = [];
//
//     _.forEach(ids, function(id) {
//       allAnwser.push(document.getElementById(id).value);
//     });
//
//     _.forEach(answers, function(answer) {
//       var modelAnswer = _.contains(allAnwser, answer);
//       if (modelAnswer) {
//         score += goal / allAnwser.length;
//       }
//     });
//     return score;
//   };
