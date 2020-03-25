import {useState} from 'react'

const SideMenu = () => {
    const [ count, setCount ] = useState(0)

    // const stateArray = useState(0)
    // const count = stateArray[0]
    // const setCount = stateArray[1]

    
    const increment = () => {
        const newCount = count +1
        setCount(newCount)
    }


    const decrement = () => {
        const newCount = count -1
        setCount(newCount)
    }
    
    return (
        <>
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
            <div className="m-3 text-center">
                <button onClick={() => increment()} className="btn btn-primary m-2">Increment Number</button>
                <button onClick={decrement} className="btn btn-primary m-2">Decrement Number</button>
                <h1>{count}</h1>
            </div>
        </>
    )
}

export default SideMenu