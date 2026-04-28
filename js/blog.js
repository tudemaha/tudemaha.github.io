const mediumBlogs = document.getElementById("medium-blogs");
const wordpressBlogs = document.getElementById("wordpress-blogs");

const RSSFetcher = async (rssUrl) => {
  const SERVICE_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  try {
    const response = await fetch(SERVICE_URL);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    return data.items.map((item) => {
      const title = item.title || "";
      const link = item.link || "";
      const pubDate = item.pubDate || "";
      const content = item.content || item.description || "";
      const excerpt =
        content
          .replace(/<[^>]*>?/gm, " ")
          .replace(/\s+/g, " ")
          .trim()
          .substring(0, 250) + "...";
      const tags = item.categories || [];
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const image = imgMatch ? imgMatch[1] : "";

      return {
        title,
        link,
        image,
        publishedAt: new Date(pubDate.replace(/-/g, "/")).toLocaleString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
            // hour: "numeric",
            // minute: "numeric",
          },
        ),
        excerpt,
        tags,
      };
    });
  } catch (error) {
    console.error("Error fetching Medium RSS:", error);
    return [];
  }
};

RSSFetcher("https://medium.com/feed/@tudemaha").then((stories) => {
  let blogCards = "";
  stories.forEach((story) => {
    blogCards += `
        <a href="${story.link}" target="_blank">
          <div
            class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105"
          >
            <div
              class="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"
            ></div>
            <div
              class="relative h-full z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 group-hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-500"
            >
              <div
                class="flex flex-col md:flex-row gap-4 text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
              >
                ${
                  story.image
                    ? `<img
                  src="${story.image}"
                  class="image rounded-lg h-50 w-full md:w-70 object-cover shrink-0"
                  alt="${story.title}"
                />`
                    : ""
                }
                <div class="flex flex-col gap-2">
                  <h3
                    class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors"
                  >
                    ${story.title}
                  </h3>
                  <p class="font-semibold">${story.publishedAt}</p>
                  <p>${story.excerpt}</p>
                  <div>
                    <div class="flex flex-wrap gap-1">
                        ${story.tags
                          .map((tag) => {
                            return `
                            <span
                            class="px-3 py-1 h-fit text-sm font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            >${tag}</span
                            >`;
                          })
                          .join("")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>`;
  });
  mediumBlogs.innerHTML = blogCards;
});

RSSFetcher("https://tudemaha.wordpress.com/feed").then((stories) => {
  let blogCards = "";
  stories.forEach((story) => {
    blogCards += `
        <a href="${story.link}" target="_blank">
          <div
            class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105"
          >
            <div
              class="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"
            ></div>
            <div
              class="relative h-full z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 group-hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-500"
            >
              <div
                class="flex flex-col md:flex-row gap-4 text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
              >
                ${
                  story.image
                    ? `<img
                  src="${story.image}"
                  class="image rounded-lg h-50 w-full md:w-70 object-cover shrink-0"
                  alt="${story.title}"
                />`
                    : ""
                }
                <div class="flex flex-col gap-2">
                  <h3
                    class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors"
                  >
                    ${story.title}
                  </h3>
                  <p class="font-semibold">${story.publishedAt}</p>
                  <p>${story.excerpt}</p>
                  <div>
                    <div class="flex flex-wrap gap-1">
                        ${story.tags
                          .map((tag) => {
                            return `
                            <span
                            class="px-3 py-1 h-fit text-sm font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            >${tag}</span
                            >`;
                          })
                          .join("")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>`;
  });
  wordpressBlogs.innerHTML = blogCards;
});
