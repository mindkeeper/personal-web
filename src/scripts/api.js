export const getPinnedProject = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/github/pinned");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
