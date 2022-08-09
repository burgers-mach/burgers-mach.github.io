const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const BELL_PLAYER = document.getElementById("beep-sound");

const app = {
  currentTurn: 0,
  mounted() {
    document.addEventListener("keyup", this.updateTurn);
  },
  unmounted() {
    document.removeEventListener("keyup", this.updateTurn);
  },
  updateTurn(event) {
    if (event.keyCode === LEFT_ARROW) {
      if (this.currentTurn === 0) {
        return;
      }

      this.currentTurn--;
    }

    if (event.keyCode === RIGHT_ARROW) {
      this.currentTurn++;
      BELL_PLAYER.play();
    }
  },
};

PetiteVue.createApp(app).mount();
