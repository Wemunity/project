export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Abstract',
      name: 'abstract',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main page image',
      type: 'image',
      accept: "image/jpeg",
      validation: Rule => Rule.required()
    },
    {
      name: 'listImage',
      title: 'List image (not used ATM)',
      type: 'image',
      accept: "image/jpeg",
    },
    {
      title: 'Body text',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    }
  ]
};
