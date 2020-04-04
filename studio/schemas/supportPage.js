export default {
  name: 'support',
  title: 'Support & Partners page',
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
  ]
};
