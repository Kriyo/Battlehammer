// /* eslint-disable camelcase */
// import netlifyIdentity from 'netlify-identity-widget'

// export const loginUser = () => {
//   console.log('::> LoginUSer -> NI:', netlifyIdentity.currentUser())
//   if (netlifyIdentity && netlifyIdentity.currentUser()) {
//     console.log('::> LoginUser -> NI CU: ', netlifyIdentity.currentUser())
//     const {
//       app_metadata,
//       created_at,
//       confirmed_at,
//       email,
//       id,
//       user_metadata,
//     } = netlifyIdentity.currentUser()

//     localStorage.setItem(
//       'currentUser',
//       JSON.stringify({
//         ...app_metadata,
//         created_at,
//         confirmed_at,
//         email,
//         id,
//         ...user_metadata,
//       })
//     )
//   }
// }

// export const logoutUser = () => {
//   localStorage.removeItem('currentUser')
// }
