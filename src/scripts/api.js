export const getPinnedProject = async () => {
  const token = import.meta.env.GITHUB_TOKEN;
  console.log("Token:", token);
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

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });
    if (!response.ok) {
      console.error("GitHub API Error:", response);
      throw new Error("Failed to fetch from GitHub API");
    }

    const data = await response.json();
    return data.user.pinnedItems.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching pinned projects:", error);
    return [];
  }
};
