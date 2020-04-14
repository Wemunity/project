export default {
  name: 'platform',
  title: 'The Platform',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Abstract',
      name: 'abstract',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main page image',
      type: 'object',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          accept: "image/jpeg",
          validation: Rule => Rule.required()
        },
        {
          title: 'Position',
          name: 'position',
          type: 'string',
          options: {
            list: [
              { title: 'Normal', value: 'normal' },
              { title: 'Full width', value: 'fullWidth' },
            ],
            layout: 'radio',
          },
          validation: Rule => Rule.required()
        }
      ]

    },
    // {
    //   name: 'listImage',
    //   title: 'List image (not used ATM)',
    //   type: 'image',
    //   accept: "image/jpeg",
    // },
    {
      title: 'Body text',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'contentImage' }]
    }
  ]
};
