import { useDispatch, useSelector } from '@/hooks/useStore'
import { addCounter } from '@/store/reducer/normal'
import Button from '@/components/share/button'

const Store = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.normal.counter)
    const add = () => dispatch(addCounter())

    return (
        <div>
            Store
            <div>
            counter = [{counter}]
            </div>
            <Button onClick={add}>Add Counter</Button>
        </div>
    )
}

export default Store
