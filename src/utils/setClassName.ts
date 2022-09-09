import { map, isArray } from 'lodash'

const setClassName = (classNames: (ClassName | [boolean, ClassName])[]): string => {
    return map(classNames, name => {
        if (isArray(name)) {
            return !!name[0] ? name[1] : ''
        } else {
            return name ?? ''
        }
    }).join(' ')
}

export default setClassName