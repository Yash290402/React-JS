import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(props) {

    const data=useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://github.com/user/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setdata(data);
    //         })
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white'>
            Github followers:{data.followers}
            <img className='text-center'src={data.avatar_url} alt="git" width={300} />

        </div>
    );
}

export default Github;

export const githubInfoloader=async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudary');
    return response.json();
}