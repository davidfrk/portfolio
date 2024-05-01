const contactInfo = {
  phone: "(31) 99612-3697",
  email: "david.andrade.dk@gmail.com",
  linkedin: "https://linkedin.com/in/david-andrade-dk/",
  github: "https://github.com/davidfrk",
}

function getWhatsAppLink() {
  const number = contactInfo.phone.match(/\d+/g).join('')
  return `https://api.whatsapp.com/send?phone=55${number}&text=Ol%C3%A1%20David%2C`
}

export { contactInfo, getWhatsAppLink }
