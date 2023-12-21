window.onload = function () {
    var marqueeText = "Moye Moye | ";
    var repetitions = 5; // Replace with your repetitions
  
    var marqueeElements = document.getElementsByClassName("marquee-text");
  
    for (var i = 0; i < marqueeElements.length; i++) {
      for (var j = 0; j < repetitions; j++) {
        marqueeElements[i].innerHTML += marqueeText;
      }
    }
  };
  

  