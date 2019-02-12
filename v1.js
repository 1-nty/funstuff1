
//<script src="math.js" type="text/javascript"></script>
// or import * 

var leg = {
  points: {
    1: [1,89,3],
    2: [5,2,4],
    3: [2,2,8]
  },
  recall: function(point) {
    console.log(this.points[point]) 
  },
  move: function(vector,point){
    move = math.add(vector, this.points[point])
    console.log( move)
  }
}

let leg1 = leg
leg1.recall(1)
leg1.move([1,2,3],1)
