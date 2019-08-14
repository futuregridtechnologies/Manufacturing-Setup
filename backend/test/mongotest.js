let mongodb = require('../MongoDB/mongo-operations');

mongodb.showAllVariants().then(data => {
    console.log(data)
})