import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './Articlecontent';
import ArticleComp from '../components/ArticleComp';
import Pagenotfound from './Pagenotfound';
const Article = () => {
    const {name}= useParams();
    const article = articles.find((article) => article.name ===name);
    if(!article)
        {
            return <Pagenotfound/>
        }
    
        const otherarti = articles.filter(article => article.name!== name)
  return (

    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
         {article.title} Article
        </h1>
        {article.content.map((paragraph, index) => (
            <p key={index} className="mx-auto leading-relaxed mb-8 text-base">{paragraph}</p>
        ))}

            <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>
                Other Articles
            </h1>
        <div className='flex flex-wrap -m-4'>

            <ArticleComp articles={otherarti}/>
        </div>
      
    </>
  )
}

export default Article