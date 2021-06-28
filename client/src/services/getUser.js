export default function getUser(user) {
  const { email, password } = user
  return fetch('/api/users/login/' + email + '/' + password, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: undefined,
  }).then(res => res.json())
}
