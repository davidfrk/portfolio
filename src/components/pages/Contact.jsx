import { FaGithub, FaLinkedin, FaRust, FaReact, FaUnity, FaPython, FaCss3Alt, FaHtml5 } from "react-icons/fa"
import { SiFlask, SiPostgresql, SiGooglecloud } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";

import { contactInfo } from '../../data/contactInfo'
import ContactButton from '../input/ContactButton'
import IconDisplay from "../display/IconDisplay";

function Contact() {
  return (
    <div className='text-[var(--text-color-2)] w-full flex flex-col justify-center items-center min-h-[80vh]'>
      <div className='text-md md:text-xl mb-24 px-2 text'>
        <h1 className='mb-0 leading-none'>David Andrade,</h1>
        <h2 className='mb-8'><span>Desenvolver Full Stack</span></h2>
        <div className="text-3xl flex mb-8">
          <a href={contactInfo.github} alt="github" target="_blank" className='inline-block'>
            <IconDisplay title="Github">
              <FaGithub/>
            </IconDisplay>
          </a>
          <a href={contactInfo.linkedin} alt="linkedIn" target="_blank" className='inline-block'>
            <IconDisplay title="LinkedIn">
              <FaLinkedin/>
            </IconDisplay>
          </a>
        </div>

        <p><b className="mr-2">Telefone:</b> {contactInfo.phone}</p>
        <p><b className="mr-2">Email:</b> {contactInfo.email}</p>

        <div className="flex items-center">
          <div className="font-bold block text-nowrap">Tech Stack |</div>
          <div className="flex p-2 items-center text-3xl justify-start flex-wrap">
            <IconDisplay title="React"><FaReact/></IconDisplay>
            <IconDisplay title="Github"><FaGithub/></IconDisplay>
            <IconDisplay title="PostgreSQL"><SiPostgresql/></IconDisplay>
            <IconDisplay title="Flask"><SiFlask/></IconDisplay>
            <IconDisplay title="Rust"><FaRust/></IconDisplay>
            <IconDisplay title="SQL"><TbSql/></IconDisplay>
            <IconDisplay title="Unity"><FaUnity/></IconDisplay>
            <IconDisplay title="GoogleCloud"><SiGooglecloud/></IconDisplay>
            <IconDisplay title="Python"><FaPython/></IconDisplay>
            <IconDisplay title="HTML5"><FaHtml5/></IconDisplay>
            <IconDisplay title="CSS3"><FaCss3Alt/></IconDisplay>
            <IconDisplay title="JavaScript"><IoLogoJavascript /></IconDisplay>
            <IconDisplay title="C/C++"><div className="text-xl">C/C++</div></IconDisplay>
            <IconDisplay title="C#"><div className="text-xl">C#</div></IconDisplay>
          </div>
        </div>
      </div>
      <ContactButton />
    </div>
  )
}

export default Contact
