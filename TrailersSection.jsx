import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const cleanYouTubeUrl = (url) => {
  if (!url) return ''
  // Only keep the part before & (remove extra params)
  return url.split('&')[0]
}

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
        Trailers
      </p>

      {/* Main Trailer Player */}
      <div className='relative mt-6 flex justify-center'>
        <BlurCircle top='-100px' right='-100px' />
        <ReactPlayer
          url={cleanYouTubeUrl(currentTrailer.videoUrl)}
          controls={true}
          className='mx-auto rounded-lg overflow-hidden'
          width='960px'
          height='540px'
        />
      </div>

      {/* Thumbnails (4 per row, centered) */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-8 max-w-4xl mx-auto'>
        {dummyTrailers.slice(0, 4).map((trailer) => (
          <div
            key={trailer.image}
            className={`relative cursor-pointer transition duration-300 rounded-lg overflow-hidden
              ${currentTrailer.image === trailer.image ? 'ring-2 ring-red-500' : 'hover:-translate-y-1'}`}
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className='w-full h-32 md:h-40 object-cover brightness-75'
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className='absolute top-1/2 left-1/2 w-8 h-8 text-white transform -translate-x-1/2 -translate-y-1/2'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection
