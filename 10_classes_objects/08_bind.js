//bind
class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:3000";

    // requirements

    document
      .querySelector(".button")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log("Clicked");
    console.log(this.server);
  }
}

const app = new React();
// app.handleClick();
