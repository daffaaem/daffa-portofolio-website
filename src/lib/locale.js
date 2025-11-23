export function switchLocalePath(currentPath, newLocale) {
  const parts = currentPath.split("/");
  parts[1] = newLocale; // Replace /id → /en atau sebaliknya
  return parts.join("/");
}
