import { find } from 'lodash'

const findData = (list: Array<object>, value: string, option?: { findKey?: string, getKey?: string, returnItem?: boolean }): any => {
    const { findKey = 'value', getKey = 'label', returnItem = false } = option
    const item = find(list, [findKey, value])
    if (!item) return undefined
    return returnItem ? item : item[getKey]
}
export default findData