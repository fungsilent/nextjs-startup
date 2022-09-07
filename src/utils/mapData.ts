import {
    omit,
    keys,
    forOwn,
    map,
    get,
    set,
    split,
    uniq,
} from 'lodash'

/**
 * mapData: two-way transform the keys of data object
 */
export const mapData = <
    Original extends unknown,
    Mapped extends unknown,
    T extends Record<string, any> = Record<string, any>,
>(
    mapper: Record<keyof T, string>
) => {
    const convertRemoveKeys = keys(mapper)
    const reverseReomoveKeys = uniq(map(mapper, (key) => split(key, '.', 1)[0]))
    return {
        mapper,
        convert: (obj: T): Mapped => {
            const newObj = omit(obj, convertRemoveKeys)
            forOwn(mapper, (newKey, key) => set(newObj, newKey, obj[key]))
            return newObj as Mapped
        },
        reverse: (obj: T): Original => {
            const newObj = omit(obj, reverseReomoveKeys)
            forOwn(mapper, (newKey, key) => {
                set(newObj, key, get(obj, newKey))
            })
            return newObj as Original
        },
    }
}

export default mapData