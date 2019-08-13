class Ingredient {
    constructor(ingredient, ingredientData) {
        this.ingredient = ingredient;
        this.ingredientData = ingredientData;
    }

    display() {
        console.log(this.ingredient + " " + this.ingredientData);
    }

    stripVariant() {
        // console.log(this.data)
        console.log(this.ingredient);
        console.log(this.ingredientData)
    }
}

module.exports.Ingredient = Ingredient;