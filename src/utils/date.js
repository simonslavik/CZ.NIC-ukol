// format ISO timestamp to a readable date string
export function formatDate(ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: '2-digit',
    hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true,
  })
}
