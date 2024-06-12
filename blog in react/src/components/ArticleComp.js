import React from 'react'
import { Link } from 'react-router-dom'
const ArticleComp = ({articles}) => {
  return (
    <>
        {articles.map((article,index)=>(
        <div key={index} className='p-4 md:w-1/2'>
            <div className='h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden hover:bg-slate-200'>

                    <Link to={`/article/${article.name}`}>
                        <img  className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt="blog" />
                    </Link>
                    <div className='p-6 '>
                        
                            <Link key="index" to={`/article/${article.name}`} className="text-2xl font-medium text-center text-gray-900 mb-3">
                                <h3 className='text-centen capitalize'>
                                    {article.name}
                                </h3>
                            </Link>
                            <p className='leading-relaxed mb-3 py-2 text-center'>
                                {article.content[0].substring(0,110)}...
                            </p>
                            <div className='flex items-center flex-wrap font-bold'>
                                <Link className='text-green-600 inline-flex items-center' to={`/article/${article.name}`}>
                                    Learn More
                                </Link>
                            </div>
                            
                        
                    </div>
            </div>

        </div>

    ))}
    </>
  )
}

export default ArticleComp