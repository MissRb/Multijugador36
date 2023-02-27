class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
   
  }

  setElementsStyle() {
   
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hola ${this.input.value()}
      </br>espera a que otro jugador se una...`;
      this.greeting.html(message);
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
