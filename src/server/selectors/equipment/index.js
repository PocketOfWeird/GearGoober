import { getSpecificEquipOrKit, getSpecificEquipByBarcode } from './specific'
import { getAllEquipAndKits } from './all'
import { suggestionFilter } from '../../helpers'

console.log('suggestionFilter', suggestionFilter);
const equipmentQuery = (state, user, query) => {
  switch (query.type) {
    case 'specfic':
      return { equipmentDetails: getSpecificEquipOrKit(state, user, query.id) }
    case 'specific by barcode':
      return { equipmentDetails: getSpecificEquipByBarcode(state, user, query.barcode) }
    case 'suggestions':
      return { equipmentSuggestions: suggestionFilter(
        getAllEquipAndKits(state, user),
        query.text.toLowerCase(),
        'lowerName'
      )}
    default:
      return {}
  }
}
export default equipmentQuery
