export default function deleteGoal(id) {
  return fetch('/api/goals/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
}
