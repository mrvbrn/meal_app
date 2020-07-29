class Meal {
    constructor(
        id,
        categoryId,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegeterian,
        isLactoseFree
    ){
        this.id = id,
        this.categoryId = categoryId,
        this.title = title,
        this.imageUrl = imageUrl,
        this.duration = duration,
        this.ingredients = ingredients,
        this.affordability = affordability,
        this.steps = steps,
        this.complexity = complexity,
        this.isGlutenFree = isGlutenFree,
        this.isVegan = isVegan,
        this.isVegeterian = isVegeterian,
        this.isLactoseFree = isLactoseFree

    }
};


export default Meal;