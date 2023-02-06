export function formatSlice(data) {
  const sliceObj = {};
  data.nodes.forEach((node) => {
    const slug = node.properties.slug.value;
    const subspace = node.properties.subspace?.value?.name;
    if (subspace) {
      checkObj(sliceObj, subspace);
      const prop = node.properties.order.value;
      checkObj(sliceObj[subspace], prop);
      sliceObj[subspace][prop][slug] = node;
    } else {
      sliceObj[slug] = node;
    }
  });
  return sliceObj;
}

function checkObj(obj, prop) {
  if (!obj[prop]) obj[prop] = {};
}
