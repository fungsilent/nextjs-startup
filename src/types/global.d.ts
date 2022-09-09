import React from 'react'

export declare global {
    // React
    type ReactNode = React.ReactNode
    type Children = { children?: ReactNode | undefined }

    // Custom
    type ClassName = string | undefined

    type UnionOverride<T, U> = Omit<T, keyof U> & U
    type NoClassName<T> = Omit<T, 'className' | 'classes'>
}