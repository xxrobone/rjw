import { deskTool } from 'sanity/desk'

const studioID = 'ygg99ic5'

export const config = {
    projectId: `${studioID}`,
    dataset: "production",
    title: "rjw",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: [
            {
                name: "blog",
                title: "Blogs",
                type: "document",
                fields: [
                    {
                        name: "name",
                        title: "Name",
                        type: "string",
                    },
                    {
                        name: "slug",
                        title: "Slug",
                        type: "slug",
                        options: {
                            source: 'name'
                        }
                    },
                    {
                        name: "image",
                        title: "Image",
                        type: "image",
                        options: {
                            hotspot: true,
                        },
                        fields: [
                            {
                                name: "alt",
                                title: "Alt",
                                type: "string",
                            }
                        ]
                    },
                    {
                        name: "content",
                        title: "Content",
                        type: "array",
                        of: [{ type: 'block'}],
                    }
                ]
            },
        ]
    },
}