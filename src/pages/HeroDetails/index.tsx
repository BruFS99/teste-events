import { useParams } from 'react-router-dom'

function HeroDetails() {
  const params = useParams()
  return <div>HeroDetails: {params.id}</div>
}

export default HeroDetails
