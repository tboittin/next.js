import { useState} from 'react'
import {useRouter} from 'next/router'

import Modal from "./modal.js"
import MovieCreateForm from "./movieCreateForm.js"

import { createMovie } from "../actions/index.js"

// Containment
const SideMenu = (props) => {
    const {categories} = props
    const router = useRouter()
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal()
            router.push('/')
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