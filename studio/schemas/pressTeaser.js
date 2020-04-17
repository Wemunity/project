export default {
  name: 'pressTeaser',
  title: 'Press Article Teaser',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Source',
      name: 'source',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY'
      }
    },
    {
      title: 'Abstract (not used ATM)',
      name: 'abstract',
      type: 'text',
    },
    {
      title: 'List image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link to article (external, including https://)',
      name: 'url',
      type: 'url'
    }
  ]
};
