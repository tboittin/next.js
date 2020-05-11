import Modal from "./modal.js"


const SideMenu = (props) => {
    
    return (
        <>
            <Modal />
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {props.categories.map((category)=>(
                    <a
                        key={category.id}
                        href="#"
                        className="list-group-item"
                    >
                        {category.name}
                    </a>
                ))}
            </div>
        </>
    )
}

export default SideMenu