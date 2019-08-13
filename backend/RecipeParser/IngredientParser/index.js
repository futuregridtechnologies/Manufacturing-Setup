class Ingredient {
    constructor(ingredient, ingredientData, filePath) {
        this.ingredient = ingredient;
        this.ingredientData = ingredientData;
        this.filePath = filePath
    }

    display() {
        console.log(this.ingredient + " " + this.ingredientData);
    }

    stripVariant() {
        Object.keys(this.ingredientData[0].SERVING[0]).map(serving=>{
            let newVariant = new IngredientVariant(this.ingredientData[0].NAME, this.ingredientData[0].SERVING[0][serving] + " " + this.ingredientData[0].MEASURE, this.ingredientData[0].PROCESSING, this.filePath)
            newVariant.display();
        })
    }
}

class IngredientVariant {
    constructor(name, quantity, processing, filePath){
        this.name = name;
        this.quantity = quantity;
        this.processing = processing;
        this.filePath = filePath
    }

    display(){
        let ingredientVariant = {
            name : this.name,
            quantity : this.quantity,
            processing : this.processing,
            file : this.filePath
        }
        console.log(ingredientVariant)
    }
}

module.exports.Ingredient = Ingredient;