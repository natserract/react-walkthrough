export const findsBy = (
  compareTo: any[], 
  compareWith: any[],
  keys: string[],
) => {
  let result: any[] = []

  compareTo.map(v => {
    return keys.map(k => {
      return compareWith.map(e => {
        if (v[k] === e.id) {
          result.push(v)
        }

        return result
      })
    })
  })

  if (result.length) return result
}

export const removeWhiteSpace = (str: string, char = '-') => str.replace(/\s+/g, char)