import React from 'react'

const Blog = () => {
  return (
    <>
    <div className="md:mt-48 mt-29 ">
        <div>
          <div className="flex flex-col justify-center gap-3 items-center ">
            <p className="text-black/80 text-sm uppercase">The Blog</p>
            <h3 className="font-semibold text-2xl  md:text-5xl text-center ">Handpicked insights from
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide">
              the pensieve
              </span>
            </h3>
          </div>

          <div>
            <p className='text-center mt-12 text-gray-500'>No Blog post found!</p>
          </div>
          </div>


    </div>
    </>
  )
}

export default Blog