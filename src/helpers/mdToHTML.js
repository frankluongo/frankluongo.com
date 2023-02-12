export function mdToHTML(md) {
  if (!md) return "";
  if (!md.includes("**")) return md;
  const mdArr = md?.split("**");
  const length = mdArr?.length;
  return mdArr
    .map((text, i) => {
      const pos = i + 1;
      if (pos === length) return text;
      return !!(pos % 2) ? `${text}<strong>` : `${text}</strong>`;
    })
    .join("");
}
