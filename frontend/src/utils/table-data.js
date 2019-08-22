let variantsArray = [];
let ingredientNames = new Set([]);

export default (variants) => {
    variants.map(variant => {
        if (!ingredientNames.has(variant.name)) {
            ingredientNames.add(variant.name);
        }
    })
    return getProcessingLayer(variants, ingredientNames)
    // return ingredientNames;
}

function getProcessingLayer(variants, ingredientNamesSet) {
    let ingredientNames = Array.from(ingredientNamesSet)
    let data = ingredientNames.map(ingredient => {
        return variants.filter(variant => {
            return variant.name == ingredient
        })
    })
    console.log(data);
    // data is array of arrays where in each index there are arrays related to one variant
    let finalData = [];
    data.forEach(variant => {
        let processingSet = new Set([]);
        variant.forEach(variantData => {
            if (!processingSet.has(variantData.processing)) {
                processingSet.add(variantData.processing)
            }
        })
        let object = {};
        object.name = variant[0].name;
        object.numberOfRecipes = 0;
        let processingLayer = [];
        let processingArray = Array.from(processingSet);
        object.processingLayer = processingArray.map(processingData => {
            let processingLayerObject = {};
            processingLayerObject.processing = processingData;
            processingLayerObject.quantityLayer = [];
            processingLayerObject.numberOfRecipes = 0;
            variant.map(variantData => {
                if (variantData.processing == processingData) {
                    let quantityLayerObject = {};
                    quantityLayerObject.quantity = variantData.quantity;
                    quantityLayerObject.files = variantData.file;
                    // return quantityLayerObject;
                    processingLayerObject.numberOfRecipes += variantData.file.length
                    processingLayerObject.quantityLayer.push(quantityLayerObject);
                    object.numberOfRecipes += variantData.file.length
                };
            })

            return processingLayerObject;
        })
        finalData.push(object);
    })
    return finalData;
}