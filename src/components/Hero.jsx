import { heroIllustration } from "../assets"

const Hero = () => (
  <section className="py-16 flex flex-col w-ful; lg:flex-row  gap-20 lg:gap-28" >
    <div className="self-center">
      <img src={heroIllustration} className="max-w-[560px] w-full" alt="hero illustration"/>
    </div>
    <div className="text-center max-w-[32rem] lg:max-w-[36rem] lg:text-left  lg:w-[50%] self-center lg:self-start lg:mt-16">
      <h2 className="text-4xl md:text-5xl leading-[1.2] text-textColor font-semibold">Shorten Your Links. Share with Ease</h2>
      <p className="mt-4 text-lg text-textColor/80">Struggling with long and unwieldy website addresses? LinkSwift is your ultimate solution. Say goodbye to complicated links and hello to simplicity and efficiency.</p>
      <button className="px-6 mt-7 py-3 font-medium text-xl bg-gradient text-white rounded-xl">Get started</button>
    </div>
  </section>
)

export default Hero
