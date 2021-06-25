export default function patchGoal(id, goal) {
  console.log('------------------------', id, goal)
  return fetch(`/api/goals/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'aplication/json',
    },
    body: JSON.stringify(goal),
  }).then(res => res.json())
}
