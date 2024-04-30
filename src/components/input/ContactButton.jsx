import { getWhatsAppLink } from "../../data/contactInfo"

function ContactButton() {
  return (
    <a className="
      px-8 py-2 text-xl rounded-full border-2 border-[var(--background-color)]
      hover:bg-[var(--background-color)] hover:text-[var(--text-color)] cursor-pointer transition
      select-none
    "
      href={getWhatsAppLink()}
      target="_blank"
    >
      Entrar em Contato
    </a>
  )
}

export default ContactButton
