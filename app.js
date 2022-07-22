const input = document.getElementById("input");
const button = document.getElementById("button");

const addItem = () => {
  if (input.value === "") {
    return;
  }
  const newEl = document.createElement("li");
  newEl.appendChild(document.createTextNode(input.value));
  const deleteBttn = document.createElement("btn");
  deleteBttn.appendChild(document.createTextNode("X"));

  deleteBttn.onclick = () => {
    list.removeChild(newEl);
  };

  newEl.onclick = () => {
    if (newEl.style.textDecorationLine === "line-through") {
      newEl.style.textDecorationLine = "none";
    } else {
      newEl.style.textDecorationLine = "line-through";
    }
  };

  newEl.appendChild(deleteBttn);

  list.appendChild(newEl);
  input.value = "";
};

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});
button.addEventListener("click", addItem);
