export function formatDate(text: string) {
  let formatted = text.replace(/\D/g, "");

  if (formatted.length > 2) {
    formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`;
  }

  if (formatted.length > 5) {
    formatted = `${formatted.slice(0, 5)}/${formatted.slice(5)}`;
  }

  return formatted;
}
