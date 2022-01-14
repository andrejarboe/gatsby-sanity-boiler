export default {
  name: 'recipes',
  title: 'Recipes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
    {
      name: 'images',
      title: 'Recipe Images',
      type: 'array',
      of: [{ type: 'images' }],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
    },
    {
      name: 'servings',
      title: 'Servings',
      type: 'number',
    },
    {
      name: 'prepTime',
      title: 'Prep Time',
      type: 'number',
    },
    {
      name: 'cookTime',
      title: 'Cook Time',
      type: 'number',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }],
    },
    {
      name: 'recipeInstructions',
      title: 'Recipe Instructions',
      type: 'array',
      of: [{ type: 'instructions' }],
    },
    {
      name: 'recipeIngredients',
      title: 'Recipe Ingredients',
      type: 'array',
      of: [{ type: 'ingredients' }],
    },
    {
      name: 'recipeTools',
      title: 'Recipe Tools',
      type: 'array',
      of: [{ type: 'tools' }],
    },
  ],
};
