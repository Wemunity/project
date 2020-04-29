export default {
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'URL',
      name: 'slug',
      type: 'slug',
      description:
        'Fullstendig URL vil bli: www.wemunity.org/news/[url]',
      options: {
        source: 'title',
        slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
                         .replace('æ', 'ae')
                         .replace('ø', 'o')
                         .replace('å', 'a')
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY'
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Abstract',
      name: 'abstract',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'object',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          accept: "image/jpeg",
          // validation: Rule => Rule.required()
        },
        {
          title: 'Position',
          name: 'position',
          type: 'string',
          options: {
            list: [
              { title: 'Normal', value: 'normal' },
              { title: 'Full width', value: 'fullWidth' },
            ],
            layout: 'radio',
          },
          // validation: Rule => Rule.required()
        }
      ]

    },
    // {
    //   name: 'listImage',
    //   title: 'List image (not used ATM)',
    //   type: 'image',
    //   accept: "image/jpeg",
    // },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'contentImage' }]
    }
  ]
};
