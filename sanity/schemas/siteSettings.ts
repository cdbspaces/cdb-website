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
            title: 'Offices / Studio Branches',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Branch Office',
                    fields: [
                        {
                            name: 'city',
                            title: 'City / Branch Name',
                            type: 'string',
                        },
                        {
                            name: 'region',
                            title: 'Region / State',
                            type: 'string',
                        },
                        {
                            name: 'address',
                            title: 'Branch Address',
                            type: 'text',
                            rows: 3,
                        },
                        {
                            name: 'phone',
                            title: 'Branch Phone Number',
                            description: 'Direct phone number for this specific branch',
                            type: 'string',
                        },
                        {
                            name: 'email',
                            title: 'Branch Email ID',
                            description: 'Direct email address for this specific branch',
                            type: 'string',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'city',
                            subtitle: 'email',
                        },
                        prepare(selection: any) {
                            const { title, subtitle } = selection
                            return {
                                title: title || 'Branch Office',
                                subtitle: subtitle || 'No email set',
                            }
                        },
                    },
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
        {
            name: 'ourCommitment',
            title: 'Our Commitment',
            description: 'The commitment statement displayed on the homepage',
            type: 'text',
            rows: 3,
        },
    ],
}
