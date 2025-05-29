import WeddingInvitation from "./Bcard"
import Card2 from "./Bcard2"

function CardsLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <WeddingInvitation />
        <Card2 />
      </div>
    </div>
  )
}

export default CardsLayout

