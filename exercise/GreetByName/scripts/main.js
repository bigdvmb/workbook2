// "use strict";
// const nameElement = document.getElementById("name");
// const greetingElement = document.getElementById("greetingMessage");
// const name = nameElement.value;
// const message = `Hello ${name}. Welcome and goodbye`;

"use strict";
      function greet() {
        const nameElement = document.getElementById("name");
        const greetingElement = document.getElementById("greetingMessage");
        const name = nameElement.value;
        const message = `Hello ${name}. Welcome and goodbye`;
        greetingElement.innerHTML = message;
      }