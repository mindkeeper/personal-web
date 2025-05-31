import { EXPERTISE_ITEMS } from "../data/experties-items";
import { getPinnedProject } from "./api";
import { createExpertiesCard, creatProjectCard } from "./ui";

async function app() {
  const res = await getPinnedProject();
  const pinnedProjects = res.data.user.pinnedItems.edges.map(
    (edge) => edge.node
  );
  pinnedProjects.forEach((project) => creatProjectCard(project));
  EXPERTISE_ITEMS.forEach((element) => createExpertiesCard(element));
}

app();
