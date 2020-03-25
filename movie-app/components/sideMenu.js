import {useState} from 'react'

const SideMenu = (props) => {
    
    return (
        <>
            <button onClick={props.clickHandler} className="btn btn-danger">
                Click Me !
            </button>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
            <div className="m-3 text-center">
                <h1>{props.count}</h1>
            </div>
        </>
    )
}

export default SideMenu