import { useState } from "react";
const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngnot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        elven Gauntlets Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
