const siteUrl = "https://rrchs.fr"

const pages = [
  {
    title: "Romain Rochas — Développeur freelance",
    path: "/",
    description:
      "Présentation de Romain Rochas, développeur freelance qui crée des produits numériques et des projets entrepreneuriaux.",
  },
  {
    title: "Projets",
    path: "/projects",
    description:
      "Sélection de projets freelance et clients, dont Ai Job Artisan.",
  },
  {
    title: "Dépôts GitHub",
    path: "/me/repos",
    description: "Projets open source publics et dépôts GitHub de Romain.",
  },
  {
    title: "Contact",
    path: "/me/contact",
    description:
      "Moyens de contacter Romain pour des missions freelance ou des collaborations.",
  },
]

export const createLlmsTxt = () => {
  const pageLinks = pages
    .map(
      ({ title, path, description }) =>
        `- [${title}](${siteUrl}${path}): ${description}`,
    )
    .join("\n")

  return `# rrchs.fr

> Portfolio de Romain Rochas, développeur freelance créant des produits numériques et des projets entrepreneuriaux. Utilisez les pages ci-dessous pour connaître son travail, son code public et ses coordonnées.

## Pages essentielles

${pageLinks}
`
}
