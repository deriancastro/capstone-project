export default function getUser(id) {
  return fetch('/api/users/login/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: undefined,
  }).then(res => res.json())
}
