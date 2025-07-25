import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Github() {

  const data = useLoaderData()
  console.log(data)
  return (
    
    <div className='text-white bg-gray-700 text-center text-4xl'>
      <h1 className='py-10 text-red-700'>Hello myself : {data.login}</h1>
     Github Followers : {data.followers}
     <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubinfoloader = async () => {
  const response = await fetch("https://api.github.com/users/AyushHowale") 
   return response.json() 

  }
