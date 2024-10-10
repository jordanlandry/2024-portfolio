export function getReadableTime(date: Date | string): string {
  if (typeof date === "string") return date;

  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${year}`;
}
