import { footerLinks } from "../constant"

const Footer = () => {
  return (
    <footer className='bg-textColor'>
      <div className='py-20 max-w-[86rem] mx-auto px-8 text-center flex flex-col md:flex-row md:justify-between'>
        <span className='text-2xl text-white font-medium' >LinkSwift</span>
        <div className="mt-10 md:mt-0 flex flex-col sm:flex-row justify-center text-center md:text-left  md:justify-start gap-8 sm:gap-14">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h6 className="text-white text-xl">{footerLink.title}</h6>
              <ul className="flex flex-col gap-2 mt-3">
                {footerLink.links.map((link) => (
                  <li key={link.name} className="text-white/70 hover:text-accent cursor-pointer" >{link.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
