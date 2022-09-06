import { reduce } from 'lodash'

/**
 * const form = [
 *     a: 0,
 *     b: 0,
 *     c: 0,
 * ]
 * const api = [
 *     a: 1,
 *     bb: 2,
 *     cc: 3,
 * ]
 * const data = mapData(form, data, [
 *     
 * ])
 */
export const renameKey = <TData>(data: TData, renameList: [keyof TData, string][], options?: { reverse: boolean }) => {
    // const { reverse = false } = options ?? {}
    // return reduce(renameList, (object, [key, newKey]) => {
    //     if (reverse) {
    //         // reverse
    //         object[key] = object[newKey]
    //         delete object[newKey]
    //     } else {
    //         // no reverse
    //         object[newKey] = object[key]
    //         delete object[key]
    //     }
    //     return object
    // }, data)}
    return
}

export default renameKey