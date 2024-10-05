import React from 'react'

const Card = ({title, genre, releaseYear, director, description, image}) => {
  return (
    <div class="rounded-xl shadow-lg">
      <div class="p-5 flex flex-col">
        <div class="rounded-xl overflow-hidden"> 
          <img src={image} />
        </div>

        <h5 class="text-2xl md:text-3xl font-medium mt-3">
          {title}
        </h5>

        <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {genre}
        </span>


        <p class="text-slate-500 textylg mt-3">
          {director}, {releaseYear}
        </p>
        
        <p class="text-slate-500 textylg mt-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card