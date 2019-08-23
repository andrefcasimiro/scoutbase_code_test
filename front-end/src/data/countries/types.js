export type Continent = {
  code: string,
  name: string,
  countries: Country[],
}

export type Language = {
  code: string,
  name: string,
  native: string,
  rtl: number,
}

export type Country = {
  code: string,
  name: string,
  native: string,
  phone: string,
  continent: Continent,
  currency: string,
  languages: Language[],
  emoji: string,
  emojiU: string,
}
