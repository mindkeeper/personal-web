const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);

    // API routes
    if (url.pathname === "/api/github/pinned") {
      try {
        const query = `
          {
            user(login: "mindkeeper") {
              pinnedItems(first: 6) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      id
                      url
                      stargazerCount
                      name
                      description
                      primaryLanguage {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          console.error("GitHub API Error:", response);
          throw new Error("Failed to fetch from GitHub API");
        }

        const data = await response.json();
        if (!data.data) {
          throw new Error("Invalid response from GitHub API");
        }

        return new Response(JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    }

    // Static file serving
    try {
      let path = url.pathname;

      // Serve index.html for root path
      if (path === "/") {
        path = "/index.html";
      }

      // Ignore dev tools requests
      if (path.includes(".well-known/appspecific")) {
        return new Response("Not Found", { status: 404 });
      }

      // Handle dist directory for compiled files
      if (path.startsWith("/dist/")) {
        const file = Bun.file("." + path);
        if (await file.exists()) {
          return new Response(file);
        }
      }

      // Handle root files (like index.html)
      const file = Bun.file("." + path);
      if (await file.exists()) {
        return new Response(file);
      }

      // Handle assets directory if file not found in root
      if (path.startsWith("/assets/")) {
        const file = Bun.file("." + path);
        if (await file.exists()) {
          return new Response(file);
        }
      }

      // 404 for files that don't exist
      console.log("File not found:", path);
      return new Response("Not Found", { status: 404 });
    } catch (error) {
      console.error("Static File Error:", error);
      return new Response("Server Error", { status: 500 });
    }
  },
});
