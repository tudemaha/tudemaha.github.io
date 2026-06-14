const projects = [
  {
    title: "Hide YT Studio Component",
    image: "/img/projects/yt-toggle.webp",
    alt: "Hide YT Studio Component",
    description:
      "Chrome extension to toggle hide/show YouTube Studio components. Make creators focus on their contents instead of monetization and subscribers.",
    scope: "Chrome Extension",
    techs: ["Chrome API", "HTML", "CSS", "JavaScript"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/tudemaha/yt-studio-toggle",
      },
    ],
  },
  {
    title: "Personal Home Server",
    image: "/img/projects/home-server.webp",
    alt: "Personal Home Server",
    description:
      "I build my personal home server to host my projects. It run on an Orange Pi 3 LTS with ARM based platform. This home server utilise Cloudflare Tunnel so it can be accessed through internet.",
    scope: "Hybrid Cloud",
    techs: ["Linux", "Docker", "FrankenPHP", "Cloudflare Tunnel"],
    links: [],
  },
  {
    title: "A Day",
    image: "/img/projects/a-day.webp",
    alt: "A Day",
    description:
      "A Day is a temporary camera for photos and videos. It stores media up to 24 hours then delete them automatically. A Day help you to keep your Photos clean and free of single-use media.",
    scope: "Mobile (iOS)",
    techs: ["Swift", "SwiftUI", "AVFoundation", "WidgetKit", "SwiftData"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ada-Batagor/batagor",
      },
    ],
  },
  {
    title: "Arca",
    image: "/img/projects/arca.webp",
    alt: "Arca",
    description:
      "Arca gives an audio tour on statues in Bali. Arca also able to explore statues in Bali, also their division into monumental and spiritual statues.",
    scope: "Mobile (iOS)",
    techs: ["Swift", "SwiftUI", "MapKit", "AVKit", "WidgetKit", "Supabase"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ADA-Kalcer/kalcer",
      },
    ],
  },
  {
    title: "Moodz",
    image: "/img/projects/moodz.webp",
    alt: "Moodz",
    description:
      "Get music recomendations for your Instagram story. Moodz help you to find the most suitable music for your photos.",
    scope: "Mobile (iOS)",
    techs: ["Swift", "SwiftUI", "Create ML", "Core ML"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/tudemaha/moodz",
      },
    ],
  },
  {
    title: "Kamus Bali & Enggano",
    image: "/img/projects/kamus.webp",
    alt: "Kamus Bali & Enggano",
    description:
      "This project is part of CIRHSS's research. The dictionary gives detailed translation for a word, including the usage example. Backed up by community support for the translation improvement. This project also supports word searches with traditional scripts.",
    scope: "Backend",
    techs: ["Go", "Gin", "GORM", "MySQL"],
    links: [
      {
        name: "Kamus Bali",
        url: "https://bali.cirhss.org",
      },
      {
        name: "Kamus Enggano",
        url: "https://enggano.cirhss.org",
      },
    ],
  },
  {
    title: "Harmoni Jiwa",
    image: "/img/projects/harmoni-jiwa.webp",
    alt: "Harmoni Jiwa",
    description:
      "This project is part of CIRHSS's research. Harmoni Jiwa is a platform to help people with mental disorders in a rural area. This platform connects doctors, volunteers, carers, and patients by tracking patients' mental health.",
    scope: "Backend",
    techs: ["Go", "Gin", "MySQL"],
    links: [
      {
        name: "Harmoni Jiwa",
        url: "https://harmonijiwa.cirhss.org",
      },
    ],
  },
  {
    title: "Rayaska Company Profile",
    image: "/img/projects/rayaska.webp",
    alt: "Rayaska Company Profile",
    description:
      "This company profile showcases Rayaska's services and company information. This website provides visitors a quick overview about Rayaska.",
    scope: "Full Stack",
    techs: ["TypeScript", "Svelte", "SvelteKit", "Tailwind CSS"],
    links: [
      {
        name: "Rayaska",
        url: "https://rayaska.com",
      },
    ],
  },
  {
    title: "Lovely Valentine",
    image: "/img/projects/lovely-valentine.webp",
    alt: "Lovely Valentine",
    description:
      'Lovely Valentine was created for Valentine day. It can express your love to someone by making quotes and send it with an "encryption."',
    scope: "Full Stack",
    techs: ["Go", "net/http", "Bootstrap", "MongoDB"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/tudemaha/lovely-valentine",
      },
      {
        name: "Lovely Valentine",
        url: "https://val.tudemaha.my.id",
      },
    ],
  },
  {
    title: "MamMates",
    image: "/img/projects/mammates.webp",
    alt: "MamMates",
    description:
      "Capstone project for Bangkit Academy 2023 Batch 2. MamMates provides a way to reduce food waste by selling food that is still edible instead of throwing it away. Machine learing technologies used to determine the food classification, the food rating, and the price.",
    scope: "Backend & Cloud",
    techs: [
      "JavaScript",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "Cloud Storage",
      "Cloud SQL",
      "Cloud Run",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/MamMates/mammates-be",
      },
    ],
  },
  {
    title: "TrackHub",
    image: "/img/projects/trackhub.webp",
    alt: "TrackHub",
    description:
      "TrackHub designed to track YouTube videos views and likes. It can be used in a competition to detect if participants use bot to gain likes.",
    scope: "Full Stack",
    techs: ["JavaScript", "Node.js", "Bootstrap", "EJS", "MySQL"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/tudemaha/trackhub",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");
  if (projectList) {
    projectList.innerHTML = projects
      .map(
        (project) => `
        <div
          class="relative w-80 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105"
        >
          <div
            class="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"
          ></div>
          <div
            class="relative h-full z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 group-hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-500"
          >
            <div
              class="flex flex-col gap-2 text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
            >
              <img
                src="${project.image}"
                class="rounded-lg"
                alt="${project.alt}"
              />
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors"
              >
                ${project.title}
              </h3>
              <p>
                ${project.description}
              </p>
              <div>
                <p class="mb-1">Project Scope:</p>
                <span
                  class="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  >${project.scope}</span
                >
              </div>
              <div>
                <p class="mb-1">Tech Stacks:</p>
                <div class="flex flex-wrap gap-1">
                  ${project.techs
                    .map(
                      (tech) => `
                    <span
                      class="px-3 py-1 h-fit text-sm font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      >${tech}</span
                    >
                  `,
                    )
                    .join("")}
                </div>
              </div>
              ${
                project.links.length > 0
                  ? `
              <div>
                <p class="mb-1">Related Links:</p>
                <div class="flex flex-wrap gap-1">
                  ${project.links
                    .map(
                      (link) => `
                    <a
                      href="${link.url}"
                      target="_blank"
                    >
                      <span
                        class="px-3 py-1 text-sm flex h-fit w-fit font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      >
                        ${link.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
                          />
                        </svg>
                      </span>
                    </a>
                  `,
                    )
                    .join("")}
                </div>
              </div>
              `
                  : ""
              }
            </div>
          </div>
        </div>
      `,
      )
      .join("");
  }
});
