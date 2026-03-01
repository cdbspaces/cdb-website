export const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'firmName',
            title: 'Firm Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'logoItem',
                    fields: [
                        {
                            name: 'image',
                            title: 'Logo Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                },
                            ],
                        },
                        {
                            name: 'theme',
                            title: 'Theme',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Light Logo (For Dark Backgrounds / Homepage)', value: 'light' },
                                    { title: 'Dark Logo (For Light Backgrounds / Projects)', value: 'dark' },
                                ],
                            },
                            validation: (Rule: any) => Rule.required(),
                        },
                    ],
                },
            ],
        },
        {
            name: 'tagline',
            title: 'Tagline',
            description: 'Short phrase describing the firm',
            type: 'string',
        },
        {
            name: 'introQuote',
            title: 'Intro Quote',
            type: 'text',
            rows: 3,
        },
        {
            name: 'introQuoteAuthor',
            title: 'Intro Quote Author',
            type: 'string',
        },
        {
            name: 'philosophyTitle',
            title: 'Philosophy Title',
            type: 'string',
        },
        {
            name: 'philosophyText1',
            title: 'Philosophy Paragraph 1',
            type: 'text',
            rows: 4,
        },
        {
            name: 'philosophyText2',
            title: 'Philosophy Paragraph 2',
            type: 'text',
            rows: 4,
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'contactPhone',
            title: 'Contact Phone',
            type: 'string',
        },
        {
            name: 'offices',
            title: 'Offices',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'city',
                            title: 'City',
                            type: 'string',
                        },
                        {
                            name: 'region',
                            title: 'Region',
                            type: 'string',
                        },
                        {
                            name: 'address',
                            title: 'Address',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
        {
            name: 'linkedIn',
            title: 'LinkedIn',
            type: 'url',
        },
        {
            name: 'instagram',
            title: 'Instagram URL',
            type: 'url',
        },
        {
            name: 'heroSlideshow',
            title: 'Hero Slideshow',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'slide',
                    fields: [
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                },
                            ],
                        },
                        {
                            name: 'headline',
                            title: 'Headline',
                            type: 'string',
                        },
                        {
                            name: 'subheadline',
                            title: 'Subheadline',
                            type: 'string',
                        },
                        {
                            name: 'order',
                            title: 'Order',
                            type: 'number',
                        },
                    ],
                },
            ],
        },
    ],
}
