export default function patchGoal(id, goal) {
  return fetch('/api/goals/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goal),
  }).then(res => res.json())
}
