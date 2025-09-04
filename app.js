function Generaterandomcard () {

  const suit = ["spade", "clubs", "diamond", "heart"];
  const value = [ "A","2","3","4","5","6","7","8","9","10","J","Q","K"];



  const randomSuit = suit[Math.floor(Math.random() * suit.length)];
  const randomValue = value[Math.floor(Math.random() * value.length )];
  const suitsymbols ={
    spade:"♠",clubs: "♣",diamond:"♦",heart:"♥"
  };
  return{
    suit:randomSuit,
    value:randomValue,
    Symbol:suitsymbols[randomSuit],
colorClass:
      randomSuit === "hearts" || randomSuit === "Diamonds" ? "red" : "black"
  };
}
function createcard (card){
  const cardcontainer = document.getElementById("card-container");
  cardcontainer.innerHTML = (`
  <div class = "card">
    <div class = "topleft ${card.Symbol} ${card.colorClass} "> 
    </div>
    <div class = "center ${card.value} ${card.colorClass}"> 
    </div>
    <div class = "bottomright ${card.symbol} ${card.colorClass} ">
    </div>
  </div>
  `);
}
const randomcard =  Generaterandomcard ();
createcard (randomcard);