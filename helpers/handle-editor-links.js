export function handleEditorLinks(html) {
  const result = html.replace(
    '<a href="https://',
    '<a target="_blank" rel="noreferrer" href="https://'
  );
  return result;
}
