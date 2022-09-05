import { find } from 'lodash'

const findData = <
    T extends Record<string, any> = Record<string, any>,
    K extends keyof T = keyof T,
>(
    list: T[],
    value: string,
    option: {
        findKey?: keyof T,
        getKey?: keyof T,
        returnItem?: boolean
    } = {}
): T | T[K] | undefined => {
    const { findKey = 'value', getKey = 'label', returnItem = false } = option
    const item = find(list, [findKey, value])
    if (!item) return
    return returnItem ? item : item[getKey]
}
export default findData