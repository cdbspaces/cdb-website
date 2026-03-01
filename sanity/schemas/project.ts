export const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Workplace', value: 'Workplace' },
                    { title: 'Hospitality', value: 'Hospitality' },
                    { title: 'Base Build', value: 'Base Build' },
                    { title: 'Campus Design', value: 'Campus Design' },
                ],
            },
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'client',
            title: 'Client',
            type: 'string',
        },
        {
            name: 'area',
            title: 'Area',
            type: 'string',
            description: 'e.g., "12,000 sqm"',
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
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
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            validation: (Rule: any) => Rule.max(200),
            description: 'Max 200 characters. Shown on project cards.',
        },
        {
            name: 'fullDescription',
            title: 'Full Description',
            type: 'text',
            description: 'Shown on individual project page.',
        },
    ],
}
