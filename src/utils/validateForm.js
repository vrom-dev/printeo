const materials = ['Resin ELEGOO UV', 'ANYCUBIC Resin Grey', 'Resin ELEGOO Washable', 'eSUN Plant-Based Resin']

export const validateForm = {
  username: (username) => {
    const usernameRegex = /^[a-zA-Z0-9]{4,10}$/
    if (usernameRegex.test(username)) return true
    return false
  },
  companyName: (companyName) => {
    const nameRegex = /^[a-zA-Z\u00C0-\u017F\s0-9]{1,40}$/
    if (nameRegex.test(companyName)) return true
    return false
  },
  name: (name) => {
    const nameRegex = /^[a-zA-Z\u00C0-\u017F\s]{1,40}$/
    if (nameRegex.test(name)) return true
    return false
  },
  firstSurname: (surname) => {
    const surnameRegex = /^[a-zA-Z\u00C0-\u017F\s]{1,40}$/
    if (surnameRegex.test(surname)) return true
    return false
  },
  secondSurname: (surname) => {
    const surnameRegex = /^[a-zA-Z\u00C0-\u017F\s]{1,40}$/
    if (surnameRegex.test(surname)) return true
    return false
  },
  email: (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(email)) return true
    return false
  },
  password: (password) => {
    // Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if (passwordRegex.test(password)) return true
    return false
  },
  phone: (phone) => {
    const phoneRegex = /^[0-9\-+]{9,15}$/
    if (phoneRegex.test(phone) || phone === '') return true
    return false
  },
  shippingTime: (shippingTime) => {
    if (shippingTime !== '') return true
    return false
  },
  shippingPrice: (shippingPrice) => {
    if (shippingPrice !== '') return true
    return false
  },
  printingPrice: (printingPrice) => {
    if (printingPrice !== '') return true
    return false
  },
  zipcode: (zipcode) => {
    const zipcodeRegex = /^[0-9]{4,5}$/
    if (zipcodeRegex.test(zipcode)) return true
    return false
  },
  country: (country) => {
    if (country !== '') return true
    return false
  },
  city: (city) => {
    if (city !== '') return true
    return false
  },
  street: (city) => {
    if (city !== '') return true
    return false
  },
  innerFill: (fill) => {
    return fill === 50 || fill === 80 || fill === 100
  },
  accuracy: (accuracy) => {
    return accuracy === 0.02 || accuracy === 0.04
  },
  scale: (scale) => {
    return scale > 0 && scale < 1.5
  },
  material: (material) => {
    return materials.find(m => m === material)
  }
}
