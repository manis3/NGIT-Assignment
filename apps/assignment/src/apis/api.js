export const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:3040/datas");
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
