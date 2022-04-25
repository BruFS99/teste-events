import { useState } from 'react'

function useFavoritesVisible() {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => setIsVisible((prev) => !prev)

  return {
    isVisible,
    handleToggle,
  }
}

export default useFavoritesVisible
