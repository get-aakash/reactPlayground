import { recipes } from "./components/data"


export default function RecipeList(){
  const value = recipes.map(recipe=>
    <li>
      <h2>{recipe.name}</h2>
      <p>{recipe.ingredients}</p>
    </li>
  
  )

  return(
    <ul>
      {value}
    </ul>
  )
}