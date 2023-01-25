import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((user) => {
      console.log(`${user[0].body} ${user[1].firstName} ${user[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
