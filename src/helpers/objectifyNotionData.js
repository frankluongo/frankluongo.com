export function objectifyNotionData(data) {
  const dataObj = {};
  data.forEach((item) => {
    dataObj[item.properties.slug.value] = item;
  });
  return dataObj;
}
