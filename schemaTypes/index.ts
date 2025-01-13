export const schemaTypes = [
    {
      name: 'blog',
      title: 'Blog',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: { source: 'title', maxLength: 200 },
        },
        {
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [
            { 
              type: 'block' // This allows rich text blocks
            },
            { 
              type: 'image' // Optional: To support inline images within the text
            }
          ],
          description: 'Rich text body of the article',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            description: 'The author of this blog post.',
          },
        {
          name: 'publishedAt',
          title: 'Published At',
          type: 'datetime',
        },
        {
          name: 'excerpt',
          title: 'Excerpt',
          type: 'text',
          description: 'A short summary of the article for SEO and previews',
        },
        {
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'category' }], 
            },
          ],
          description: 'A list of categories that the article belongs to',
        },        
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'A list of keywords or tags related to the article for SEO',
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image' }],
          options: {
            hotspot: true,
          },
          description: 'An array of images to be used within the article',
        },
        {
          name: 'readingTime',
          title: 'Reading Time',
          type: 'number',
          description: 'Estimated reading time in minutes. You can calculate it programmatically.',
        },
        {
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: [
              { title: 'Draft', value: 'draft' },
              { title: 'Published', value: 'published' },
              { title: 'Archived', value: 'archived' },
            ],
          },
          description: 'The publication status of the article',
        },
        {
          name: 'seoTitle',
          title: 'SEO Title',
          type: 'string',
          description: 'Custom title for SEO purposes (usually shorter and more keyword-focused)',
        },
        {
          name: 'seoDescription',
          title: 'SEO Description',
          type: 'text',
          description: 'Custom meta description for SEO',
        },
      ],
    },
    {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The name of the author.',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 200 },
            description: 'The unique URL identifier for the author.',
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            description: 'A profile picture for the author.',
          },
          {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'A short biography for the author.',
          },
          {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'platform',
                    title: 'Platform',
                    type: 'string',
                    options: {
                      list: [
                        { title: 'Twitter', value: 'twitter' },
                        { title: 'LinkedIn', value: 'linkedin' },
                        { title: 'GitHub', value: 'github' },
                        { title: 'Website', value: 'website' },
                      ],
                    },
                    description: 'The social media platform.',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                    description: 'The link to the social profile or website.',
                  },
                ],
                preview: {
                  select: {
                    title: 'platform',
                    subtitle: 'url',
                  },
                },
              },
            ],
            description: 'Social media profiles or personal website links.',
          },
        ],
      },
      {
        name: "category",
        title: "Category",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
            description: "Name of the category",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            description: "Unique identifier for the category (URL-friendly)",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
          {
            name: "description",
            title: "Description",
            type: "text",
            description: "Short description of the category (optional)",
          },
        ],
      }
      
  ];
  