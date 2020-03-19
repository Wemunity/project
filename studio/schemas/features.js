export default {
  name: 'features',
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
};
