import { PINNED_ITEMS } from "../data/pinned-items";

export const getPinnedProject = async () => {
  /*
   *even tho i have this token inside .env file, i can't use it in the browser
   * because it will be exposed to the public, so i have to use a server-side solution and fetch the data from the server.
   * i will learn how to do that later. for now, i will use the data from the pinned-items.js file as a simulation
   */

  // const token = import.meta.env.GITHUB_TOKEN;
  // const query = `
  //         {
  //             user(login: "mindkeeper") {
  //                 pinnedItems(first: 6) {
  //                     totalCount
  //                     edges {
  //                         node {
  //                             ... on Repository {
  //                                 id
  //                                 url
  //                                 stargazerCount
  //                                 name
  //                                 description
  //                                 primaryLanguage {
  //                                     id
  //                                     name
  //                                 }
  //                             }
  //                         }
  //                     }
  //                 }
  //             }
  //         }
  //     `;
  // try {
  //   const response = await fetch("https://api.github.com/graphql", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({ query }),
  //   });
  //   if (!response.ok) {
  //     console.error("GitHub API Error:", response);
  //     throw new Error("Failed to fetch from GitHub API");
  //   }
  //   const data = await response.json();
  //   return data.user.pinnedItems.edges.map((edge) => edge.node);
  // } catch (error) {
  //   console.error("Error fetching pinned projects:", error);
  //   return [];
  // }

  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(PINNED_ITEMS);
      }, 50);
    });
  } catch (error) {
    console.error("Error fetching pinned projects:", error);
    return [];
  }
};
