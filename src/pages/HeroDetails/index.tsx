import { useParams } from 'react-router-dom'

import HeroDetailsLayout from 'layout/HeroDetails'

function HeroDetails() {
  const params = useParams()

  return (
    <HeroDetailsLayout>
      <div>HeroDetails: {params.id}</div>
    </HeroDetailsLayout>
  )
}

export default HeroDetails
