const getFormFields = require('../../../lib/get-form-fields.js')

const authApi = require('../auth/api.js')
const authUi = require('../auth/authUi.js')

const onSignUp = event => {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  // console.log(`pre gff`, event.target)
  const data = getFormFields(event.target)
  // console.log(`post gff`, data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
