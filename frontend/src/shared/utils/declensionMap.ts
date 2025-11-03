type Forms = { one: string; few: string; many: string; other?: string };
/**
 * Склонение слова через Intl.PluralRules
 * @param count - число
 * @param forms - объект с формами для категорий plural rules: one, few, many, other
 * @returns строка вида "5 штук"
 */
function declension(count: number, forms: Forms): string {
  const pluralRules = new Intl.PluralRules("ru-RU");

  const category = pluralRules.select(count);
  const word = forms[category as keyof typeof forms] ?? forms.other ?? "";

  return `${count} ${word}`;
}

function countDeclension(count: number) {
  return declension(count, {
    one: "штука",
    few: "штуки",
    many: "штук",
    other: "штук",
  });
}

export const declensionMap = { countDeclension };
