import { reduce } from 'lodash'

export const renameKey = <TData>(data: TData, renameList: [keyof TData, string][], options?: { reverse: boolean }) => {
    const { reverse = false } = options ?? {}
    return reduce(renameList, (object, [key, newKey]) => {
        if (reverse) {
            // reverse
            object[key] = object[newKey]
            delete object[newKey]
        } else {
            // no reverse
            object[newKey] = object[key]
            delete object[key]
        }
        return object
    }, data)}

export default renameKey