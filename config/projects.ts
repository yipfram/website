export interface Button {
  text: string
  link: string
  icon: string
}

export interface Project {
  client?: string
  note?: string
  name: string
  description: string
  image?: string
  buttons?: Button[]
}

export const projects: Project[] = [
  {
    name: "Scouticket",
    description: "Application web (PWA) gratuite et open source pour envoyer simplement ses justificatifs et notes de frais à la trésorerie de son groupe scout : photo ou import du justificatif, nommage structuré automatique et envoi par e-mail, sans stockage sur le serveur. Gestion multi-groupes et multi-unités. Développé avec Next.js, TypeScript, Tailwind CSS, Better Auth et PostgreSQL.",
    image: "/assets/images/projects/scouticket.png",
    buttons: [
      {
        text: "Website",
        link: "https://scouticket.fr",
        icon: "mdi:link",
      },
      {
        text: "Source",
        link: "https://git.latoilescoute.net/dev/scouticket",
        icon: "mdi:git",
      },
    ],
  },
  {
    name: "Taux de bio cantines - Data for Good",
    description: "Développement d'une carte interactive pour visualiser les taux de bio-cantines de france depuis les données de data.gouv. Participation au développement de la pipeline data (python, pandas) et typescript (nuxt, vue)",
    image: "/assets/images/projects/taux-bio-cantines.png",
    buttons: [
      {
        text: "Website",
        link: "https://territoiresfertiles.fr/widgets/fnab-carte-bio-cantines",
        icon: "mdi:link",
      },
    ],
  },
  {
    // client: "Japan",
    name: "Ai job artisan",
    description:
      "A simple platform to help students get past the first round of interviews. This project was a good practice at understanding how hard it is to find an innovative way to solve a problem.",
    image: "/assets/images/projects/ai-job-artisan.png",
  }
]
