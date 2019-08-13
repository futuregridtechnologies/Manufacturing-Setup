const {Ingredient} = require('./IngredientParser/index.js');

class Recipe {
    constructor(filepath, data) {
        this.filepath = filepath;
        this.data = data;
    }

    display() {
        console.log(this.filepath + " " + this.data);
    }

    stripRecipe() {
        // console.log(this.data)
        if (this.data !== "null" && this.data) {
            try {
                // console.log(this.data)
                // // console.log(Object.keys(JSON.parse(this.data)));
                let parsedData = JSON.parse(this.data);
                // console.log(parsedData)
                let keys = Object.keys(parsedData);
                keys.map(key => {
                    // console.log(this.data)
                    // let stringKey = JSON.stringify(key)
                    // console.log(key + ":" + parsedData[key]);
                    let newIngredient = new Ingredient(key, parsedData);
                    newIngredient.stripVariant();
                })
            } catch (err) {
                console.log(this.data)
                console.log(err.message)
            } finally {

            }
        }
    }
}

module.exports.Recipe = Recipe;