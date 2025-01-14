import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"

const Earphones = () => {
  return (
    <div className='mx-6'>
        {/* General app margins */}

            {/* The negative margins keep the full width, padding is set inside component*/}
            <div className="-mx-6">
                <Header isInHome={false} />
            </div>
            
            <main className='px-10 py-20'>
                EARPHONES
            </main>

            {/* The negative margins keep the full width, padding is set inside component*/}
            <div className="-mx-6 -mt-8 ">
                <Footer />
            </div>
        </div>
  )
}
export default Earphones