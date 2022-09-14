import { useDispatch, useSelector } from '@/hooks/useStore'
import { addCounter } from '@/store/reducer/normal'
import Display from '@/components/page/example/display'
import Button from '@/components/share/button'
import styles from '@/styles/page/example.module.scss'
// type
import { Page } from '@/types/app'

const Store: Page = () => {
    const dispatch = useDispatch()
    const counterA = useSelector(state => state.normal.counter)
    const add = () => dispatch(addCounter())

    return (
        <div className={styles.layout}>
            <h2>Store</h2>
            <Display v={{ counterA }}/>
            <Button onClick={add}>Add Counter</Button>
        </div>
    )
}

export default Store
