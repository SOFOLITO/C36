class Form{
    constructor(){
        
    }
    display(){
        var title = createElement('h2');
        title.html("Juego de carreras");
        title.position(130,0);

        var input = createInput("name");
        var button = createButton('Play');
        var saludo = createElement('h3');

        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            saludo.html("Hola "+name);
            saludo.position(130,160);

        });
    }
}