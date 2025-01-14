import Photo from "./../../../assets/shared/mobile/image-best-gear.jpg"

const AboutUs = () => {
    return (
        <div>
            <img className="" src={Photo} alt="" />
            <div className="px-6">
                <h2 className="mt-10 mb-8 font-bold text-2xl text-center tracking-[1px] sm:text-[28px] uppercase">
                    Bringing you the <span className="text-peru">best</span> audio gear
                </h2>
                <p className="text-[15px] leading-[1.5] text-center text-gray">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </div>
    )
}
export default AboutUs