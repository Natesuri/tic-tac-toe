const getFormFields = require('../../../lib/get-form-fields.js')

const authApi = require('../auth/api.js')

const onSignUp = event => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  authApi.signUp(data)
}

module.exports = {
  onSignUp
}
