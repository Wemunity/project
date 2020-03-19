export default {
  name: 'footerModule',
  title: 'Footer Module',
  type: 'document',
  fields: [
    {
      title: 'Branding',
      name: 'branding',
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
