export default function postGoal(goal) {
  return fetch('/api/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goal),
  }).then(res => res.json())
}
