window.onload = function() {
    var text = "Welcome....!\nI am Sandeep Kumar.!\nDeveloper, Coder, Artist, Professional.!";
    var container = document.getElementById("autotype-container");
    var delay = 50; // Adjust the delay between each character (in milliseconds)
    var reverseDelay = 1000; // Adjust the delay after one process is completed (in milliseconds)
    var cycleDelay = 12000; // Delay between cycles (in milliseconds)
    var index = 0;
    var reverse = false;
    var cycleCount = 0;
  
    function autotype() {
      if (!reverse) {
        if (index < text.length) {
          container.innerHTML += text.charAt(index);
          index++;
          setTimeout(autotype, delay);
        } else {
          setTimeout(reverseAutotype, cycleDelay);
        }
      } else {
        if (index >= 0) {
          container.innerHTML = text.slice(0, index);
          index--;
          setTimeout(autotype, delay);
        } else {
          setTimeout(startCycle, reverseDelay);
        }
      }
    }
  
    function reverseAutotype() {
      reverse = true;
      index = text.length - 1;
      setTimeout(autotype, delay);
    }
  
    function startCycle() {
      container.innerHTML = ""; // Clear the container
      index = 0;
      reverse = false;
      cycleCount++;
      setTimeout(autotype, delay);
    }
  
    autotype();
  };
  