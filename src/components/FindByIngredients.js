import React, { useState } from "react";
import axios from "axios"; // import axios for making API calls
import "../css/FindByIngredients.css"; // import the CSS file

function FindByIngredients() {
  const [ingredients, setIngredients] = useState("");

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = async (event) => { // make the function async
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=<insertHere>`
      );
      console.log(response.data); // log the response data to the console 
    } catch (error) {
      console.error(error); // log any errors to the console
    }
  };

  return (
    <form onSubmit={handleSubmit} className="find-by-ingredients">
      <label>
        Ingredients:
        <input
          type="text"
          value={ingredients}
          onChange={handleInputChange}
          placeholder="Enter ingredients separated by commas"
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default FindByIngredients;
