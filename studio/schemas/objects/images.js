export default {
  name: 'images',
  title: 'Images',
  type: 'image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description:
        'Important for SEO and accessibility. Can be the the same as the caption.',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
