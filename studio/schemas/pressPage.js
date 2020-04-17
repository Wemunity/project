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
      title: 'Press images (.zip)',
      name: 'pressImagesFile',
      type: 'file',
      description: 'This is the downloadable .zip file'
    },
    {
      title: 'Press images',
      name: 'pressImages',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'These are only used for preview on the page'
    },
    {
      title: 'Logo pack (.zip)',
      name: 'logoPack',
      type: 'file',
      description: 'This is the downloadable .zip file'
    },
    {
      title: 'Logo images',
      name: 'logos',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'These are only used for preview on the page'
    },

  ]
};
