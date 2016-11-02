import map from 'lodash/map'

export const suggestionFilter = (state, text, property) => {
  return map(
    state,
    object => {
      if (object[property].includes(text)) {
        return { text: object[property], value: object.id }
      }
    }
  )
}
