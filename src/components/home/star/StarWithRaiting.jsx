import StarRating from "./Star";


export default function StarRatingDemo() {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Star Rating Examples</h1>
      <div>
        <h2 className="text-lg font-semibold mb-2">0.5 Stars</h2>
        <StarRating rating={0.5} />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">1 Star</h2>
        <StarRating rating={1} />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">1.5 Stars</h2>
        <StarRating rating={1.5} />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">3.7 Stars</h2>
        <StarRating rating={3.7} />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">5 Stars</h2>
        <StarRating rating={5} />
      </div>
    </div>
  )
}