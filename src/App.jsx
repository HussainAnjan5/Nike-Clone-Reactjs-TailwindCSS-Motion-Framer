import { Hero,PopularProducts,SpecialOffer,Subscribe,SuperQuality,Services,CustomerReview,Footer } from "./sections"
import Nav from "./components/Nav"
const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
    <Hero/>
      </section>
      <section className='padding'>
    <PopularProducts/>
      </section>
      <section className='padding'>
    <SuperQuality/>
      </section>
      <section className='padding-x'>
    <Services/>
      </section>
      <section className='padding'>
    <SpecialOffer/>
      </section>
      <section className='padding bg-pale-blue'>
    <CustomerReview/>
      </section>
      <section className='padding-x sm:py-32 w-full'>
    <Subscribe/>
      </section>
      <section className='padding bg-black text-white padding-x padding-t pb-8'>
    <Footer/>
      </section>
    </main>
  )
}

export default App