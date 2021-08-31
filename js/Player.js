class Player {
  constructor() {
    this.name = null
    this.positionX = 0
    this.positionY = 0
    this.index = null
  }
  GetCount(){
    var playerStateREF = database.ref('playerCount')
    playerStateREF.on("value",data=>{
      playerStateREF = data.val()
    })
  }
  UpdateCount(count){
   database.ref('/').update({
     playerCount:count
   })
  }
  AddPlayers(){
    var playerIndex = "players/player"+this.index
    if (this.index == 1) {
      this.positionX = width/2-100;
      
    } else {
       this.positionX = width/2+100;
    }
    database.ref(playerIndex).set({
     name:this.name,
     positionX:this.positionX,
     positionY:this.positionY
    })
  }
}
