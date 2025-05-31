import { getPinnedProject } from "./api";
import { creatProjectCard } from "./ui";

async function app() {
  const pinnedProjects = await getPinnedProject();
  pinnedProjects.forEach((project) => creatProjectCard(project));
}

app();
