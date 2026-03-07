async function createUser(request, data) {
  return await request.post('/users', { data });
}