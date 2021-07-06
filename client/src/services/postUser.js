export default function postUser(user) {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('this email or full name allready exist, try again', res)
    }
  })
}
