'use client';
import { useState, useEffect } from 'react'

export const BlogPost = ({ author, content,coverImage,markdownStyles, title, }: any) => {
    const [state, setState] = useState(typeof window === 'object' && Number(localStorage.getItem('spent')) || 0)
    useEffect(() => {
        setInterval(() => {
            setState(state+1)
            localStorage.setItem('spent', state)
        }, 1000)
    }, [state])
    return (
        <>
        <span>Spent on the page {state} seconds</span>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
          <a href="/" className="hover:underline">Blog
        </a>
        </h2>
        <article className="mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{children}
          </h1>
        <div className="hidden md:block md:mb-12"><Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0"><CoverImage title={title} src={coverImage} />
        </div>
        <div className="max-w-2xl mx-auto"><div className="block md:hidden mb-6">  <Avatar name={author.name} picture={author.picture} /></div><div className="mb-6 text-lg">  <DateFormatter dateString={date} /></div>
        </div>
        <div className="max-w-2xl mx-auto"><div  className={markdownStyles["markdown"]}  dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
        </article>
        </>
    )
}