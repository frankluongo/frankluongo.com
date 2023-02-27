export function stripMarkdown(md) {
  if (typeof md !== "string") return "";
  return md.replaceAll("**", "");
}
