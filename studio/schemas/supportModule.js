export default {
  name: 'supportModule',
  title: 'Support Module',
  type: 'document',
  fields: [
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
    },
    {
      title: 'Supporters',
      name: 'supporters',
      type: 'array',
      of: [{ type: 'supporters' }]
    }
  ]
};
