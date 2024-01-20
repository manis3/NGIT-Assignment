export const fetchData = async (api) => {
  try {
    const res = await fetch(api);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
