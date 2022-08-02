import { find } from 'lodash'

const findOptionLabel = (options: Array<object>, value: string, key?: string) => {
    const option = find(options, ['value', value])
    return option ? option[key ?? 'label'] : undefined
}
export default findOptionLabel