import Card from './Card'

const getMovies = async () => {
  const res = await fetch('http://localhost:4000/movies', {
    next: {
      revalidate: 30
    }
  })
  
  return res.json()
}

const CardList = async () => {
  const movies = await getMovies()

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          releaseYear={movie.release_year}
          director={movie.director}
          description={movie.description}
          image={movie.image}
        />
      ))}
    </div>
  )
}

export default CardList