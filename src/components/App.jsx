import { Profile } from './Profile';
import user from '../../src/user.json';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

// const jacob = {
//   id: '1',
//   name: 'Jacob Mercer',
//   email: 'j.mercer@mail.com',
//   age: 32,
//   avatar:
//     'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg?w=740&t=st=1699521304~exp=1699521904~hmac=f4bc57cc2ea687fdf2e089ee92eb451708f52e5281f64289bdd7516da810ebc7',
// };

// return (
// <div>
//   <Profile
//     userName={jacob.name}
//     imgUrl={jacob.avatar}
//     email={jacob.email}
//     age={jacob.age}
//   />
// </div>
// );

// <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101'
//   }}
// >
//   React homework template
// </div>
