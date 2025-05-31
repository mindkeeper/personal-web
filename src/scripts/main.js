import { getPinnedProject } from "./api";
import { creatProjectCard } from "./ui";

async function app() {
  const res = await getPinnedProject();
  const pinnedProjects = res.data.user.pinnedItems.edges.map(
    (edge) => edge.node
  );
  pinnedProjects.forEach((project) => creatProjectCard(project));
}

app();
