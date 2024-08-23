let ladder = {
    step: 0,
  
    up: function (){
      ladder.step++
      return ladder
    },
  
    down: function () {
      ladder.step--
      return ladder;
    },
  
    showStep: function () {
      return ladder.step
    }
  };
  console.log(ladder.up().up().showStep())
