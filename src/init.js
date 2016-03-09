$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
     event.preventDefault();
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $(".container").height() * Math.random(),
      $(".container").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('.container').append(dancer.$node);
  });
  
    var result = [];

  $(".pair-up").on("click", function(event) {
    event.preventDefault();

    var pairs = window.dancers;
    while(pairs.length > 1) {
      var pair= [];
      pair.push(pairs.shift());
      var paired = pairs.reduce(function(a,b) {
        var distanceA = Math.sqrt(Math.pow(Math.abs(a.top - pair[0].top), 2) + Math.pow(Math.abs(a.left - pair[0]).left, 2));
        var distanceB = Math.sqrt(Math.pow(Math.abs(b.top - pair[0].top), 2) + Math.pow(Math.abs(b.left - pair[0]).left, 2));
        if(distanceA < distanceB) {
          return a;
        } else {
          return b;
        }
      });
      pair.push(paired);
      pairs.splice(pairs.indexOf(pair[1]),1);
      result.push(pair);
    }
    result.forEach(function(pair, i) {
      var height = $(".container").height() * Math.random();
      var width = $(".container").width() * Math.random();

      pair[0].setPosition(height, width);
      pair[1].setPosition(height + 50, width + 50);
    });
  });

  $(".line-up").on("click", function(event) {
    event.preventDefault();
    window.dancers.forEach(function(dancer, i) {
      dancer.lineUp();
    });
  });
  
});
