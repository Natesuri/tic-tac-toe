const getFormFields = require('../../../lib/get-form-fields.js')

const authApi = require('../auth/api.js')
const authUi = require('../auth/authUi.js')

const onSignUp = event => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  console.log(data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch()
}

const onSignOut = event => {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch()
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
