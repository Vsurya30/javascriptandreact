import React from 'react'
import article from './Articlecontent'

import ArticleComp from '../components/ArticleComp'
const Articlelist = () => {
  return (
    <div >
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        Articles List
        </h1>
        <div className='container py-4 mx-auto'>
            <div className='flex flex-wrap -m-4'>
                <ArticleComp articles={article}/>

            </div>
        </div>

      
      
      
    </div>
  )
}

export default Articlelist