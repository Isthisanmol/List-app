export function groupNames(
  names: string[],
  sortBy: "name" | "length",
  filter: string,
  groupBy: "first-letter" | "length",
  selectedGroups: string[],
) {
  let filtered = names.filter((name) =>
    name.toLowerCase().startsWith(filter.toLowerCase()),
  );

  if (sortBy === "name") {
    filtered.sort((a, b) => a.localeCompare(b));
  } else {
    filtered.sort((a, b) => a.length - b.length);
  }

  const grouped: { [key: string]: string[] } = {};

  filtered.forEach((name) => {
    let key: string;
    if (groupBy === "first-letter") {
      key = name[0].toUpperCase();
    } else {
      key = name.length.toString();
    }

    if (selectedGroups.length === 0 || selectedGroups.includes(key)) {
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(name);
    }
  });

  return Object.keys(grouped)
    .sort()
    .map((key) => ({
      title: key,
      data: grouped[key],
    }));
}
