import { deskTool } from 'sanity/desk'

const studioID = process.env.SANITY_STUDIO_ID

export const config = {
    projectId: `${studioID}`,
    dataset: "production",
    title: "rjw",
    basePath: "/admin",
    plugins: [deskTool()],
}