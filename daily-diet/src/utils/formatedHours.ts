export function formatHour(value: string) {
  const numericValue = value.replace(/\D/g, "");

  let formattedHour = "";
  if (numericValue.length > 0) {
    formattedHour = numericValue.slice(0, 2);

    if (numericValue.length > 2) {
      formattedHour += ":" + numericValue.slice(2, 4);
    }
  }

  return formattedHour;
}
