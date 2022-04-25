import { useSearchParams } from 'react-router-dom'

function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams({})

  const handleSubmit = (search: string) => {
    if (!search) {
      setSearchParams({})
      return
    }

    setSearchParams({ search })
  }

  return {
    searchParams,
    handleSubmit,
  }
}

export default useSearch
