'use strict'

const addNestedValue = require('./add-nested-value')

const getFormFields = (form) => {
  // console.log(`form is `, form)
  const target = {}
  // console.log(`form elements are `, form.elements)
  const elements = form.elements || []
  for (let i = 0; i < elements.length; i++) {
    const e = elements[i]
    // console.log(`current element is `, e)
    if (!e.hasAttribute('name')) {
      continue
    }

    let type = 'TEXT'
    // console.log(`current element node name is `, e.nodeName)
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type
        break
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase()
        // console.log(`type is `, type)
        break
    }

    const name = e.getAttribute('name')

    if (type === 'MULTIPLE') {
      for (let i = 0; i < e.length; i++) {
        if (e[i].selected) {
          addNestedValue(target, name, e[i].value)
        }
      }
    } else if ((type !== 'RADIO' && type !== 'CHECKBOX') || e.checked) {
      // console.log(`e value is`, e.value)
      addNestedValue(target, name, e.value)
    }
  }

  return target
}

module.exports = getFormFields
