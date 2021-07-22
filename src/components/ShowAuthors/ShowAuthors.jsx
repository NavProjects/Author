import React, { useState, useEffect } from 'react'
import styles from "./StyleShowAuthors.module.css"
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import DeleteHandler from '../delete'

const AuthorList = props => {

    const { created, setCreated } = props

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setListState(res.data.getallAuthors)
            })
            .catch(err => console.log(err))
    }, [created])

    const clickEdit = (e) => {
        e.preventDefault()
        const author_id = e.target.name
        navigate(`/edit/${author_id}`)
    }


    return (
        <div>
            <p className={styles.purple}>We have Quotes by:</p>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                {
                    listState.map((author, i) => {
                        return (
                            <tr key={i}>
                                <td className={styles.purple}>{author.name}</td>
                                <td>
                                    {/* <Link to={`/edit/${author._id}`}>Edit</Link> */}
                                    <button name={author._id} onClick={clickEdit}>Edit</button>
                                    <DeleteHandler author_id={author._id} created={created} setCreated={setCreated} />
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default AuthorList