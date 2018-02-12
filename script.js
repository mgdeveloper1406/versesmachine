    var quoteList = [
        "'The Lord will fight for you, and you shall hold your peace.'", 
        "'He gives power to the weak, and to those who have no might He increases strength.'", 
        "'Therefore if the Son makes you free, you shall be free indeed.'",
        "'You, Lord, keep my lamp burning; my God turns my darkness into light.'",
        "'For I am the LORD your God who takes hold of your right hand and says to you : do not fear; I will help you.' ",
        "'If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.'",
        ];

     var authorList = [
     "Exodus 14:14",
     "Isaiah 40:29",
     "John 8:36",
     "Psalm 18:28",
     "Isaiah 41:13",
     "James 1:5",
     ];
     
     var quote = document.getElementById("quote");
     
     var author = document.getElementById("author");
     
     var button = document.getElementById("switch");
     
     var tweetBtn = document.getElementById("tweet_btn");
     
     var randomNumberBetween0and5;
     
     var tweetQuote;
     
     var tweetAuthor;
     

  
  $( document ).ready(function() {
      

     button.onclick = function () {
         
           randomNumberBetween0and5 = Math.floor(Math.random() * quoteList.length);
           quote.textContent = quoteList[randomNumberBetween0and5];
           author.textContent = authorList[randomNumberBetween0and5];
           tweetQuote = quoteList.split(quoteList[randomNumberBetween0and5]);
           tweetAuthor = authorList.split(authorList[randomNumberBetween0and5]);
           

     }
    
  $(".twitter-share-button").click(function() {
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + tweetQuote + tweetAuthor );
    
  });
  
 });
 
