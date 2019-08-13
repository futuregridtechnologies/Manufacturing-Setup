const {Recipe} = require('./RecipeParser/index.js');


function stripFile(result){
    result.forEach(element => {
        // if(Array.isArray(element.children)) {
        //     stripFile(element.content);
        // }

        let newRecipe = new Recipe(element.path, element.content);
        // newRecipe.display();
        newRecipe.stripRecipe();
      });
}

module.exports = {
    stripFile
}