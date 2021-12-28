class Form {
    constructor() {
      
    }
  
    display(){
   
     var title = createElement('h1')
      title.html("God Battle");
      title.position(280, 100);
      
      
     var input = createInput("");
     var button = createButton('Play');
      
      input.position(270, 200);
      button.position(340, 250);
  
     button.mousePressed(function(){
       input.hide();
        button.hide();
  
        var name = input.value();
        console.log(name);
        playerCount+=1;
       player.update(name)
       player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(310, 200)
      });
  
    }
  }
  