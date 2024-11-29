export const getNextIntlPhrases = async (locale: string = "en", namespaces: string[] = []) => {
  const phrases = await import(`../../locales/${locale}.json`)

  const filteredPhrases =
    namespaces.length === 0
      ? phrases
      : Object.keys(phrases).reduce(
          (acc, key) => {
            if (namespaces.includes(key)) {
              acc[key] = phrases[key]
            }
            return acc
          },
          {} as Record<string, string>,
        )
  return filteredPhrases
}
