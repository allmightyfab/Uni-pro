

setTimeout(function(){
    document.getElementById("myImage").style.display = "block";
  }, 1000);
  
  function myFunction() {
      if (confirm("Why did you click this button? Now you have to count how many baby goats are in this picture!") == true) {
  
          let goats = 0;
          do {
              goats = parseInt(prompt("How many babby goats did you see?"));
              if (goats === 4) {
                  alert("Nice, you saw 4 goats!");
                  document.getElementById("Theone").style.display = "block";
                  document.getElementById("myImage").style.visibility="hidden";
  
  
              } else {
                  alert("Wrong! Try again.");
              }
          } while (goats !== 4);
      }
  }
  
  