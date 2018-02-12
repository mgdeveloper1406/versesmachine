    var quoteList = [
        "'The Lord will fight for you, and you shall hold your peace.'", 
        "'He gives power to the weak, and to those who have no might He increases strength.'", 
        "'Therefore if the Son makes you free, you shall be free indeed.'",
        "'You, Lord, keep my lamp burning; my God turns my darkness into light.'"
        ];

     var authorList = [
     "Exodus 14:14",
     "Isaiah 40:29",
     "John 8:36",
     "Psalm 18:28"
     ];
     
     var quote = document.getElementById("quote");
     
     var author = document.getElementById("author");
     
     var button = document.getElementById("switch");

  
  $( document ).ready(function() {
      

     button.onclick = function () {
           var randomNumberBetween0and2 = Math.floor((Math.random() * 3) + 0);
           quote.textContent = quoteList[randomNumberBetween0and2];
           author.textContent = authorList[randomNumberBetween0and2];


     }
    

 });