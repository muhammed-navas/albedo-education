import React from 'react'

const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default function StarRating({ rating, maxRating = 5 }) {
  // Ensure the rating is between 0 and maxRating
  const clampedRating = Math.max(0, Math.min(rating, maxRating))

  // Calculate the number of full and half stars
  const fullStars = Math.floor(clampedRating)
  const hasHalfStar = clampedRating % 1 >= 0.5
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center" aria-label={`Rating: ${clampedRating} out of ${maxRating} stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className="w-5 h-5 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <div className="relative w-5 h-5">
          <StarIcon className="absolute w-5 h-5 text-gray-300" />
          <div className="absolute w-[10px] h-5 overflow-hidden">
            <StarIcon className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  )
}