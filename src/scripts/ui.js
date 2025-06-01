export const creatProjectCard = (project) => {
  const cardContainer = document.getElementById("projects");
  const card = document.createElement("article");
  card.classList.add("project-card");
  const linkContainer = document.createElement("a");
  linkContainer.classList.add("p-10", "block");
  linkContainer.href = project.url;
  linkContainer.rel = "noopener noreferrer";
  linkContainer.target = "_blank";
  const language = document.createElement("p");
  language.classList.add("text-xs", "font-bold", "tracking-wide", "uppercase");
  language.textContent = project.primaryLanguage.name;

  const title = document.createElement("h3");
  title.classList.add(
    "mt-2",
    "text-[24px]",
    "font-semibold",
    "leading-tight",
    "text-primary"
  );
  title.textContent = project.name;

  const description = document.createElement("p");
  description.classList.add("mt-2", "text-primary");
  description.textContent = project.description || "No description available";

  const starGazerContainer = document.createElement("div");
  starGazerContainer.classList.add(
    "flex",
    "items-center",
    "mt-4",
    "text-primary"
  );
  const starIconContainer = document.createElement("div");
  starIconContainer.classList.add("w-4", "h-4", "p-[2px]", "mr-1");
  starIconContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         class="lucide lucide-star-icon lucide-star fill-current -mt-px w-full h-full">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  `;

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

export const createExpertiesCard = (experties) => {
  const cardContainer = document.getElementById("experties");
  const card = document.createElement("div");
  card.classList.add("expertise-card");
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("exprtise-content-container");
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("expertise-logo");
  logoContainer.innerHTML = experties.element;

  // Add the name below the logo
  const title = document.createElement("p");
  title.classList.add("expertise-title");
  title.textContent = experties.name;

  contentContainer.append(logoContainer, title);
  card.append(contentContainer);
  cardContainer.append(card);
};
