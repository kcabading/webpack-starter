
import fooString from "./foo.js";
import barString from "./bar-cjs";

console.log(fooString, barString);

import createCard from "./card.js";
import "./index.css";

createCard(
    "Testing Webpack",
    "I'm on my way to learning advance webpack configurations"
);