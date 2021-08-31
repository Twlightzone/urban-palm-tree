class Game {
  constructor() {}

  getState(){
    var gameState = database.ref('gameState')
    gameState.on("value",function(data){
      gameState = data.val()
    })
  }

  

  start() {
    player = new Player();
    player.GetCount()
    form = new Form();
    form.display();
  }



 
}
