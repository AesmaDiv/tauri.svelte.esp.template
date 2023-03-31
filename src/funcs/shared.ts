export function getInheritedProperty(property: string, node: HTMLElement) : string {
  if (!node) return "not found";
  let result = getComputedStyle(node)[property];
  return result || getInheritedProperty(property, node.parentElement);
}
export function getInheritedColor(node: HTMLElement) : string {
  if (!node) return 'rgba(0, 0, 0, 0)';
  let result = getComputedStyle(node).color;
  if (result === 'rgba(0, 0, 0, 0)') result = null;
  return result || getInheritedColor(node.parentElement);
}
export function getInheritedBackgroundColor(node: HTMLElement) : string {
  if (!node) return 'rgba(0, 0, 0, 0)';
  let result = getComputedStyle(node).backgroundColor;
  if (result === 'rgba(0, 0, 0, 0)') result = null;
  return result || getInheritedBackgroundColor(node.parentElement);
}