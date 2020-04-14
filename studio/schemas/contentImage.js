export default {
  name: 'contentImage',
  title: 'Content Image',
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      accept: "image/jpeg",
      validation: Rule => Rule.required()
    },
    {
      title: 'Caption (optional)',
      name: 'caption',
      type: 'string',
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
      options: {
        list: [
          { title: 'Centered in column', value: 'centered' },
          { title: 'Left aligned', value: 'left' },
          { title: 'Right aligned', value: 'right' },
          { title: 'Full width', value: 'fullWidth' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required()
    },
  ]
};
