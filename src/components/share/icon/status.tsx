import { find } from 'lodash'
import { ElementType } from 'react'
import LoaderIcon from '@/components/share/icon/loader'
import SuccessIcon from '@/components/share/icon/success'
import ErrorIcon from '@/components/share/icon/error'
import { setClassName } from '@/utils'

export type StatusIconProps = {
    loading?: boolean
    success?: boolean
    error?: boolean
    classes?: {
        root?: ClassName
        icon?: ClassName
        loader?: ClassName
        success?: ClassName
        error?: ClassName
    }
}

const StatusIcon = ({
    loading  = false,
    success = false,
    error = false,
    classes: {
        root: rootClassName,
        icon: iconClassName,
        loader: loaderClassName,
        success: successClassName,
        error: errorClassName,
    } = {}
}: StatusIconProps) => {
    const map: [boolean, ElementType, ClassName][] = [
        [error, ErrorIcon, errorClassName],
        [success, SuccessIcon, successClassName],
        [loading, LoaderIcon, loaderClassName],
    ]
    const status = find(map, v => v[0])
    if (!status) return null
    const Component = status[1]
    return (
        <div className={rootClassName}>
            <Component className={{ root: setClassName([iconClassName, status[2]]) }}/>
        </div>
    )
}

export default StatusIcon