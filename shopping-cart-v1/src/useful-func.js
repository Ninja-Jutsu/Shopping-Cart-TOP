export function filterArray(array) {
  const filtered = []
  const existing = []

  for (let i = 0; i < array.length; i++) {
    if (!existing.includes(array[i].name)) {
      existing.push(array[i].name)
      const newItem = { ...array[i], pieces: 0 }
      filtered.push(newItem)
    }
  }

  for (let z = 0; z < filtered.length; z++) {
    for (let y = 0; y < array.length; y++) {
      if (filtered[z].name === array[y].name) {
        filtered[z].pieces = filtered[z]['pieces'] + array[y]['pieces']
      }
    }
  }

  return filtered
}
