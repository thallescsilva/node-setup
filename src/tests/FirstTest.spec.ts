import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Thalles'

  expect(user.name).toEqual('Thalles')
})
