export default function deleteGoal(id) {
  return fetch('/api/goals/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'aplication/json',
    },
    body: undefined,
  }).then(res => res.json())
}
