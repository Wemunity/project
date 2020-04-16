export default {
  name: 'partners',
  title: 'Partners and support',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Abstract (ingress)',
      name: 'abstract',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Button links',
      name: 'buttonLinks',
      type: 'array',
      of: [{ type: 'buttonLink' }]
    },
    {
      title: 'Business donations',
      name: 'businessDonations',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Individual donations',
      name: 'individualDonations',
      type: 'array',
      of: [{ type: 'string' }]
    },
  ]
};
