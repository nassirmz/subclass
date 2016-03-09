var RotateDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

RotateDancer.prototype = Object.create(Dancer.prototype);
RotateDancer.prototype.constructor = RotateDancer;
RotateDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);
    this.$node.addClass("rotate").addClass("bunny");
  // animate({width: "20%", opacity: 0.4, borderWidth: "10px"}, 1500)
};

RotateDancer.prototype.lineUp = function() {
  this.$node.css({"top": 300});
}