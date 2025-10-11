export function highlightText(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, `<span class="highlight">$1</span>`);
}

export function uniqueEducations(program: { uuid: string; edu_level: { name?: string } }[]) {
  const firstWords = program
    .map((p) => p.edu_level?.name?.split(' ')[0])
    .filter((word): word is string => Boolean(word) && word !== 'Не');
  return [...new Set(firstWords)];
}
