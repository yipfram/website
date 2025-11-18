const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [
            "https://rrchs.fr/blog/mistral-ai-pushes-for-impact-measure-standards"
        ],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "You can provide a `sitemap` key in your markdown frontmatter to configure specific URLs. Make sure you include a `loc`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/donate"
            },
            {
                "loc": "/me/repos"
            },
            {
                "loc": "/me/songs"
            },
            {
                "loc": "/blog"
            },
            {
                "loc": "/me/contact"
            },
            {
                "loc": "/projects"
            },
            {
                "loc": "/projects/premid"
            },
            {
                "loc": "/projects/premid/mdcreator"
            },
            {
                "loc": "/projects/premid/custom-status"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
