import React, { useState } from 'react';
import { Link, navigate } from "@reach/router"
import axios from 'axios'

const Create = props => {

    const {created, setCreated } = props

    const [ authorName, setAuthorName ]= useState({})

    const [validState, setValidState] = useState({})

    const changeHandler = e => {
        setAuthorName({
            ...authorName,
            [e.target.name]: e.target.value
        })
    }

    const clickHome = e => {
        e.preventDefault();
        navigate("/")
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", authorName)
            .then(res => {
                navigate("/")
                setCreated(!created)
                setAuthorName({
                    name: ""
                })
            })
            .catch(err => {
                const { errors } = err.response.data
                let errorObj = {}
                for (let [key, value] of Object.entries(errors)) {
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <p>Add a new Author</p>
                <label name="name">Name:</label>
                <input name="name" type="text" onChange={changeHandler} value={authorName.name} />
                {(validState.name) ? <p>{validState.name}</p> : null}
                <div>
                    <button onClick={clickHome}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Create