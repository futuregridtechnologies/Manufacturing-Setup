const {Recipe} = require('./RecipeParser/index.js');


function stripFile(result){
    result.forEach(element => {
        if(Array.isArray(element.data)) {
            stripFile(element.data);
        }
        let newRecipe = new Recipe(element.id, element.data);
        newRecipe.display();
      });
}

module.exports = {
    stripFile
}