export default {
  name: 'buttonLink',
  title: 'Button Link',
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
    }
  ]
};
