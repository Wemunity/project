export default {
  name: 'introModule',
  title: 'Intro Module',
  type: 'document',
  fields: [
    {
      title: 'Branding',
      name: 'branding',
      type: 'string'
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
