export const creatProjectCard = (project) => {
  const cardContainer = document.getElementById("projects");
  const card = document.createElement("article");
  card.classList.add("project-card");
  const linkContainer = document.createElement("a");
  linkContainer.classList.add("p-10", "block");
  linkContainer.href = project.url;
  linkContainer.rel = "noopener noreferrer";
  linkContainer.target = "_blank";
  console.log(linkContainer);

  const language = document.createElement("p");
  language.classList.add("text-xs", "font-bold", "tracking-wide", "uppercase");
  language.textContent = project.primaryLanguage.name;

  const title = document.createElement("h3");
  title.classList.add(
    "mt-2",
    "text-[24px]",
    "font-semibold",
    "leading-tight",
    "text-brand-500"
  );
  title.textContent = project.name;

  const description = document.createElement("p");
  description.classList.add("mt-2", "text-brand-500");
  description.textContent = project.description || "No description available";

  const starGazerContainer = document.createElement("div");
  starGazerContainer.classList.add(
    "flex",
    "items-center",
    "mt-4",
    "text-brand-500"
  );
  const starIconContainer = document.createElement("div");
  starIconContainer.classList.add("w-4", "h-4", "p-[2px]", "mr-1");

  const starCount = document.createElement("span");
  starCount.classList.add(
    "-mt-px",
    "text-xs",
    "font-semibold",
    "leading-none",
    "tracking-wide"
  );
  starCount.textContent = project.stargazerCount;
  starGazerContainer.append(starIconContainer, starCount);
  linkContainer.append(language, title, description, starGazerContainer);
  card.append(linkContainer);
  cardContainer.append(card);
};
