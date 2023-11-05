export function objectifyNotionData(data) {
  const dataObj = {};
  data.forEach((item) => {
    dataObj[item.properties.slug.value] = item;
  });
  return dataObj;
}

/**
 * parseNotionData()
 * @param notionData
 * @param arrayofKeys
 */

export function parseNotionData(data, keys) {
  return data.map((item) => {
    const flatItem = {};
    keys.forEach((key) => {
      // if the key is on the top level, add it and return.
      if (item[key]) return (flatItem[key] = item[key]);
      // otherwise, look for it among properties
      flatItem[key] = item.properties[key].value;
    });
    return flatItem;
  });
}
