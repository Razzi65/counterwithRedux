import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { doIncerement, doDecrement } from "@/store/counterslice"


const CountingApp = () => {

    const states = useSelector((store)=>store.counterslice.count)

    const dispatch = useDispatch()

    return (
        <>
        <button onClick={()=>dispatch(doIncerement()) }> plus </button>

        {states}

        <button onClick={()=>dispatch(doDecrement())}> Minus </button>
        </>
    )
}

export default CountingApp