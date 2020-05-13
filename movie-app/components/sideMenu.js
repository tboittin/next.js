import Modal from "./modal.js"
import MovieCreateForm from "./movieCreateForm.js"
import { createMovie } from "../actions/index.js"

// Containment
const SideMenu = (props) => {
    const {categories} = props
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            console.log(JSON.stringify(movies))
            modal.closeModal()
        })
    }

    return (
        <>
            <Modal ref={elem => modal = elem} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
            </Modal>
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