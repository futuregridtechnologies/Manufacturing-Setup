

class Recipe {
    constructor(filepath, data) {
        this.filepath = filepath;
        this.data = data;
    }

    display() {
        console.log(this.filepath + " " + this.data);
    }

    stripRecipe() {
        // Object.keys(this.data).map(item => {
        //     console.log(item)
        // })
        // console.log(Object.keys(this.data));
        console.log(this.data)
    }
}

module.exports.Recipe = Recipe;