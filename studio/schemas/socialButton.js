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
      name: 'icon',
      title: 'Icon',
      type: 'image'
    }
  ]
};
