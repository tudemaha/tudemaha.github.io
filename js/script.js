const activeNavLink =
  "rounded-md px-3 py-2 text-sm font-medium bg-lime-100 text-lime-700 dark:bg-lime-900/50 dark:text-lime-300 nav-link";
const inactiveNavLink =
  "text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 nav-link";

const activeSideLink =
  "block rounded-lg bg-lime-100 text-lime-700 dark:bg-lime-900/50 dark:text-lime-300 px-4 py-2 text-sm font-medium side-link";
const inactiveSideLink =
  "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 side-link";

const navLinks = document.querySelectorAll(".nav-link");
const sideLinks = document.querySelectorAll(".side-link");
const sidebarToggle = document.getElementById("navToggle");
const sidebar = document.getElementById("sidebar");
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const resetNavLink = () => {
  navLinks.forEach((link) => {
    link.className = inactiveNavLink;
  });
};

const resetSideLink = () => {
  sideLinks.forEach((link) => {
    link.className = inactiveSideLink;
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    resetNavLink();
    link.className = activeNavLink;
  });
});

sideLinks.forEach((link) => {
  link.addEventListener("click", () => {
    resetSideLink();
    link.className = activeSideLink;
  });
});
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("fixed");
  sidebar.classList.toggle("hidden");
});

if (savedTheme === "dark" || (!savedTheme && systemTheme)) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
