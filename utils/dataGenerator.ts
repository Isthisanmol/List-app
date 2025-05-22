const sampleNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Isaac",
  "Jack",
  "Karen",
  "Liam",
  "Mona",
  "Nancy",
  "Oscar",
  "Paul",
  "Quincy",
  "Rachel",
  "Steve",
  "Tracy",
  "Uma",
  "Victor",
  "Wendy",
  "Xavier",
  "Yasmine",
  "Zack",
];

function getRandomName() {
  const name = sampleNames[Math.floor(Math.random() * sampleNames.length)];
  return name + Math.floor(Math.random() * 100000);
}

export function generateNames(count: number): string[] {
  const names: string[] = [];
  for (let i = 0; i < count; i++) {
    names.push(getRandomName());
  }
  return names;
}
