export default {
  name: 'donationModule',
  title: 'Donation Module',
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
      title: 'Donators',
      name: 'donations',
      type: 'array',
      of: [{ type: 'donator' }]
    }
  ]
};
