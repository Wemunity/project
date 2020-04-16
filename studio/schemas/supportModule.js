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
      title: 'Abstract',
      name: 'abstract',
      type: 'text',
    },
    {
      title: 'Supporters',
      name: 'supporters',
      type: 'array',
      of: [{ type: 'supporters' }]
    }
  ]
};
