

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
        if (this.data !== undefined || this.data !== null) {
            console.log(Object.keys(JSON.parse(this.data)));
        }
        // console.log(this.data)
    }
}

module.exports.Recipe = Recipe;