    var quoteList = ["'The Lord will fight for you, and you shall hold your peace.'", "'He gives power to the weak,And to those who have no might He increases strength.'", "'Therefore if the Son makes you free, you shall be free indeed.'" ];

     var authorList = ["Exodus 14:14", "Isaiah 40:29", "John 8:36" ];
     
     var quote = document.getElementById("quote");
     
     var author = document.getElementById("author");
     
     var button = document.getElementById("switch");

  
  $( document ).ready(function() {
     
         button.onclick = function () {
           quote.textContent = quoteList[0];
           author.textContent = authorList[0];
         }

     
 });
 
