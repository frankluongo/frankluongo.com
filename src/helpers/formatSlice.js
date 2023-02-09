export function formatSlice(data) {
  const slicesObj = {};
  const slices = data?.allNotion?.slices || [];
  slices.forEach((slice) => {
    const slug = slice?.properties?.slug?.value;
    const space = slice?.properties?.space?.value.name;
    // If the space doesn't exist, create it!
    createObj(slicesObj, space, {});
    const subspace = slice?.properties?.subspace?.value.name;
    // No subspace? Just set the slug on the slicesObj
    if (!subspace) return (slicesObj[space][slug] = slice);
    const key = slice?.properties?.order?.value;
    createObj(slicesObj[space], subspace, {});
    createObj(slicesObj[space][subspace], key, {});
    slicesObj[space][subspace][key][slug] = slice;
  });
  return slicesObj;
}

function createObj(obj, prop, defVal) {
  if (!obj[prop]) obj[prop] = defVal;
}
