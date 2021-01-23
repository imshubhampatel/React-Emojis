import React, { useState } from "react";
import "./styles.css";
import bg from "./hero.svg";
var emojiDatabase = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes"
};
var suggestions = ["😀", "😃", "😄", "😆", "🤣"];
export default function App() {
  const [meaning, setMeaning] = useState("");
  //Function to handle TYPED EMOJIS
  function onchangeHandler(event) {
    var meaning = emojiDatabase[event.target.value];
    console.log(event.target.value);
    if (event.target.value === "") {
      meaning = "";
    } else if (meaning === undefined) {
      meaning = "We do not have this in our database :(";
    }
    setMeaning(meaning);
  }
  //Function to handle CLICKED EMOJIS
  function emojiClickHandler(emoji) {
    setMeaning(emojiDatabase[emoji]);
  }
  return (
    <div className="App">
      <div className="container">
        <h1 id="Heading">Emoji-Scanner</h1>
        <img id="Wallpaper" src={bg} alt="Wallpaper"></img>
        <h2 id="Suggestion"> Suggestions</h2>
      </div>
      <div className="container emoji">
        {suggestions.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              id="Emojis"
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
      <div className="emoji-text container">
        <input
          type="searchbox"
          placeholder="Detect your emoji here..."
          onChange={onchangeHandler}
        ></input>
      </div>
      <div className="output">
        <h2 id="output-text">
          {" "}
          According to Emoji-Scanner means:{" "}
          <span id="output-meaning">{meaning} </span>{" "}
        </h2>
      </div>
    </div>
  );
}
