export declare global {
    type UnionOverride<T, U> = Omit<T, keyof U> & U
}