import { getWhatsAppLink } from "../../data/contactInfo"

function ContactButton() {
  return (
    <div className="relative flex justify-center items-center gap-4">
      <div className="w-[15vw] border-dashed border-b-[2px] border-black" />
      <a className="
        px-8 py-2 text-xl rounded-full border-2 border-[var(--background-color)]
        hover:bg-[var(--background-color)] hover:text-[var(--text-color)] cursor-pointer transition
        select-none block w-fit whitespace-nowrap
      "
        href={getWhatsAppLink()}
        target="_blank"
      >
        Entrar em Contato
      </a>
      <div className="w-[15vw] border-dashed border-b-[2px] border-black" />
    </div>
  )
}

export default ContactButton
