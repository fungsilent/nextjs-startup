import { useDispatch, useSelector } from '@/hooks/useStore'
import { addCounter } from '@/store/reducer/normal'
import Button from '@/components/share/button'

const Store = () => {
    const dispatch = useDispatch()
    const counterA = useSelector(state => state.normal.counter)
    const add = () => dispatch(addCounter())

    console.log('> counterA', counterA)

    return (
        <div>
            <h2>Store</h2>

            <br/>
            <div>counterA = [{counterA}]</div>
            <br/>
            <Button onClick={add}>Add Counter</Button>
        </div>
    )
}

export default Store
