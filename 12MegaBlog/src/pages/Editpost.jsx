import React, { useState, useEffect } from 'react';
import { Container, PostForm } from '../components';
import appwriteservice from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function Editpost(props) {
    const [posts, setposts] = useState([])
    const { slug } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        if (slug) {
            appwriteservice.getPost(slug).then((post) => {
                if (post) {
                    setposts(post)
                }
            })

        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return posts ?(
        <div className='py-8'>
            <Container>
                <PostForm posts={posts}/>
            </Container>
        </div>
    ): null
}

export default Editpost;