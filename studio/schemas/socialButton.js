export default {
  name: 'socialButton',
  title: 'Social button',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL (local beginning with / or external beginning with https://)',
      type: 'url'
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
      description: 'A light color requires a dark icon, and the other way aroud.',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
  ]
};
