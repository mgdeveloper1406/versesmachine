    var quoteList = ["'The Lord will fight for you, and you shall hold your peace.'", "'He gives power to the weak,And to those who have no might He increases strength.' "];

     var authorList = ["Exodus 14:14", "Isaiah 40:29" ];
     
     var quote = document.getElementById("quote");
     
     var author = document.getElementById("author");

  
  $( document ).ready(function() {
     
     quote.textContent = quoteList[0];
     author.textContent = authorList[0];
     
     alert("Making sure jquerry still works");
 });