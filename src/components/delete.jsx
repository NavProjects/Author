import React from 'react'
import axios from 'axios'

const DeleteHandler = props => {

    const {author_id, created, setCreated} = props

    const Delete = () => {
        console.log(author_id)
        axios.delete(`http://localhost:8000/api/authors/delete/${author_id}`)
        .then(res => setCreated(!created))
        .catch(err => console.log(err))
    }

    return(
        <button onClick={Delete}>Delete</button>
    )
}


export default DeleteHandler