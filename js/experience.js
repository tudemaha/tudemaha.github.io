const experiences = [
  {
    role: "Founder",
    company: "Rayaska",
    period: "July 2025 - Present",
    points: [
      "Manage product roadmap and technical decisions.",
      "Monitor developer teams and make sure projects align with the requirements.",
      "Deliver significant solutions for 4+ clients."
    ]
  },
  {
    role: "Backend & Cloud Engineer",
    company: "CIRHSS",
    period: "October 2023 - present",
    points: [
      "Developed and maintained 4 backend services to work optimally in CIRHSS's projects.",
      "Designed and hosted 6 systems on CIRHSS's virtual private server using containerization method.",
      "Integrated Google Cloud Storage and Cloud Function for event-driven images/audios format conversion."
    ]
  },
  {
    role: "Speaker",
    company: "Student Innovation Centre Udayana",
    period: "May 2026",
    points: [
      "Shared insights about AI automation and its benefits for daily life as a college student to over 25 participants.",
      "Utilized Agent Development Kit (ADK), an AI agent framework, to build AI automation with multi-agent approach.",
      "Designed and delivered comprehensive workshop for participants to build their own AI automation."
    ]
  },
  {
    role: "Software Engineer (iOS)",
    company: "Apple Developer Academy",
    period: "March - December 2025",
    points: [
      "Worked in 5 different teams to do research and development of applications/producs in the Apple ecosystem.",
      "Developed and released 3 apps on the Apple App Store and 2 additional apps up to the testing phase.",
      "Explored accessibility features provided by Apple on their devices and developed apps that are compatible with the accessibility features."
    ]
  },
  {
    role: "Speaker",
    company: "Google Developer Group Bali",
    period: "December 2025",
    points: [
      "Conducted a technical workshop delivering hands-on session on self-host n8n solution using Google Cloud Run.",
      "Led a comprehensive session focusing on practical implementation to approximately 30 attendees.",
      "Mentored attendees during the sessioin by answering technical questions and providing guidances."
    ]
  },
  {
    role: "Speaker",
    company: "Udayana University",
    period: "August 2025",
    points: [
      "Presented about artificial intelligence (AI) ethics in education to audiences of approximately 200 students.",
      "Maintained an interactive one-hour session with students.",
      "Addressed 4 student questions clearly and effectively during the session."
    ]
  },
  {
    role: "Cloud Computing Mentor",
    company: "Bangkit Academy 2024 Batch 2",
    period: "September 2024 - January 2025",
    points: [
      "Mentored 24 entees by providing guidance, feedback, and support for their academy journey.",
      "Conducted 15 weekly consultaton and assisted 13 class sessions reguarly with 4.92/5 and 4.90/5 rating.",
      "Contributed to achieving a 91% graduation rate in Bangkit 2024 Batch 2."
    ]
  },
  {
    role: "Hybrid Cloud & Red Hat Mentee",
    company: "Infinite Learning",
    period: "February - June 2024",
    points: [
      "Learned the Red Hat System Administration modules in synchronous and asynchronous learning in 4 months.",
      "Integrated Google Cloud Platform and Red Hat Ecosystem using the Red Hat Console.",
      "Earned 5 best product by implementing a robust and scalable Apache Web Server Deployment on Red Hat Linux."
    ]
  },
  {
    role: "Cloud Computing Mentee",
    company: "Bangkit Academy 2023 Batch 2",
    period: "August 2023 - January 2024",
    points: [
      "Learned Google Cloud Platform intensively as the main cloud platform in cloud computing Path.",
      "Earned 14 skill badges in cloud computing related technologies.",
      "Graduated with distinction, ranking within the top 10% of cohorts in cloud computing path."
    ]
  },
  {
    role: "Backend Developer",
    company: "Avatar Solutions",
    period: "July 2022 - June 2023",
    points: [
      "Implemented PHP programming language for the backend service.",
      "Developed RESTful API for the information exchange used by the mobile programmers.",
      "Learned app production flow fromt he planning until testing and deploying."
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const experienceList = document.getElementById("experience-list");
  if (experienceList) {
    experienceList.innerHTML = experiences
      .map(
        (exp) => `
        <div class="relative mb-12 pl-8 md:pl-10">
          <span
            class="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 dark:bg-lime-600 text-white text-sm font-bold shadow-sm"
          ></span>
          <dt
            class="text-xl md:text-2xl font-bold text-lime-600 dark:text-lime-300 -mt-1"
          >
            ${exp.role}
          </dt>
          <dd
            class="text-base md:text-lg text-neutral-700 dark:text-white leading-relaxed"
          >
            <div>
              <h3 class="font-bold">${exp.company}</h3>
              <h4>${exp.period}</h4>
              <ul class="list-disc ms-4">
                ${exp.points
                  .map(
                    (point) => `
                  <li class="dark:text-neutral-300 text-gray-700">
                    ${point}
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          </dd>
        </div>
      `
      )
      .join("");
  }
});
