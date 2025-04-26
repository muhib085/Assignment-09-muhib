const dataLoad = async ({ params }) => {
  const res = await fetch("/couponData.json");
  const data = await res.json();
  const singleData = data.find((d) => d.id == params.id);
  return singleData;
};

export default dataLoad;
