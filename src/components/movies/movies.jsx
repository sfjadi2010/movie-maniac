import React from 'react'
import MovieList from '../movie-list/MovieList'
import { useSearchParams } from 'react-router-dom'

import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'

const Movies = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    const title = searchParams.get("title");
    const emoji = searchParams.get("emoji");
    let emojiSrc = null;     

    if (emoji === "fire") {
      emojiSrc = Fire;
    } else if (emoji === "star") {
      emojiSrc = Star;
    } else if (emoji === "party") {
      emojiSrc = Party;
    }

  return (
    <MovieList type={type} title={title} emoji={emojiSrc} />
  )
}

export default Movies;