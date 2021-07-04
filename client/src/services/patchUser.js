export default function patchGoal(id, user) {
  return fetch('/api/users/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => res.json())
}
