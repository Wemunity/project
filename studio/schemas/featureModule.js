export default {
  name: 'featureModule',
  title: 'Feature Module',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },

    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [{ type: 'features' }]
    }
  ]
};
