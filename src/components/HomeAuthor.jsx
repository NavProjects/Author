import React, { useState } from 'react'
import AuthorList from './ShowAuthors/ShowAuthors'
import {Link} from '@reach/router'



const Home = props => {

    const { authorName, setAuthorName, created, setCreated} = props


    return(
        <div>
            <Link to="/new">Add an Author</Link>
            <AuthorList authorName={authorName} setAuthorName={setAuthorName} created={created} setCreated={setCreated}/>
        </div>
    )
}

export default Home