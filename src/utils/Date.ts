function getDateFormatedBR(iso: string) {
  const date = new Date(iso)
  return date.toLocaleDateString(undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export { getDateFormatedBR }
