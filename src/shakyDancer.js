var ShakyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;
ShakyDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);
    this.$node.addClass("shaky").animate({ left: this.left-50 }, 100).animate({ left: this.left }, 100);
};
