    var quoteList = ["'The Lord will fight for you, and you shall hold your peace.'", "'He gives power to the weak,And to those who have no might He increases strength.' "];

     var authorList = [" - Exodus 14:14", " - Isaiah 40:29" ];
     
     var quote = document.getElementsByClassName("quote");
     
     var author = document.getElementsByClassName("author");
     
     var test = "Hello World";

  
  $( document ).ready(function() {
     
     quote.textContent = test;
     
     alert("Making sure jquerry works");
 });