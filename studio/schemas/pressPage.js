export default {
  name: 'press',
  title: 'Press page',
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
      title: 'Press articles',
      name: 'articles',
      type: 'array',
      of: [{ type: 'pressTeaser' }]
    },
    {
      title: 'Press kit title',
      name: 'pressKitTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Press kit description',
      name: 'pressKitDescription',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Press images',
      name: 'pressKitImages',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      title: 'Logo images',
      name: 'logoImages',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      title: 'Full press kit (.zip)',
      name: 'fullPressKit',
      type: 'file',
    },
  ]
};
