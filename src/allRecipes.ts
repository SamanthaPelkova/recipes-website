// recipes.ts

export interface Recipe {
    name: string;
    ingredients: string[];
    instructions: string;
}

export const allRecipesInfo: Recipe[] = [
    {
        name: 'Pasta Carbonara',
        ingredients: ['Spaghetti', 'Eggs', 'Bacon', 'Parmesan Cheese'],
        instructions: 'Cook pasta; Mix eggs, bacon, and cheese; Toss with pasta.',
    },
    {
        name: 'Chicken Stir-Fry',
        ingredients: ['Chicken', 'Vegetables', 'Soy Sauce', 'Rice'],
        instructions: 'Stir-fry chicken and vegetables; Add soy sauce; Serve over rice.',
    },
    {
        name: 'Vegetarian Pizza',
        ingredients: ['Pizza dough', 'Tomato sauce', 'Cheese', 'Vegetables'],
        instructions: 'Roll out dough; Spread sauce; Add cheese and vegetables; Bake in the oven.',
    },
    {
        name: 'Chocolate Cake',
        ingredients: ['Flour', 'Sugar', 'Cocoa powder', 'Eggs', 'Milk'],
        instructions: 'Mix dry ingredients; Add wet ingredients; Bake in a preheated oven.',
    },
    {
        name: 'Tomato Basil Salad',
        ingredients: ['Tomatoes', 'Fresh basil', 'Olive oil', 'Salt', 'Pepper'],
        instructions: 'Slice tomatoes; Chop fresh basil; Drizzle with olive oil; Season with salt and pepper.',
    },
    {
        name: 'Grilled Salmon',
        ingredients: ['Salmon fillets', 'Lemon', 'Garlic', 'Olive oil', 'Salt', 'Pepper'],
        instructions: 'Marinate salmon; Grill until cooked; Squeeze lemon juice before serving.',
    },
];
