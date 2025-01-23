import { useState, useEffect } from "react";
import { Product } from "../../../types/Product_T";
import { CartItem } from "../../../types/CartItem_T";
import ProductDetails from "../../../Utils/ProductDetailes";
import Button from "./../../utils/buttons/Primary";

const productData: Product = {
    productName: "XX99 Mark II Headphones",
    thumbName: "XX99 MK II",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: [ 
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
    ],
    price: 2999,
    newProduct: true,
    images: {
        thumbUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/thumb.png?updatedAt=1737456129780",
        mobileUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/image-product-mobile.jpg?updatedAt=1737483659719",
        tabletUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/image-product-tablet.jpg?updatedAt=1737483680172",
        desktopUrl: "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/image-product-desktop.jpg?updatedAt=1737483718730",
        detaileldImages: {
            mobile: ["https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Mobile/image-gallery-1.jpg?updatedAt=1737496716048", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Mobile/image-gallery-2.jpg?updatedAt=1737496715963", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Mobile/image-gallery-3.jpg?updatedAt=1737496716364"],
            tablet: ["https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Tablet/image-gallery-1.jpg?updatedAt=1737496737407", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Tablet/image-gallery-2.jpg?updatedAt=1737496737439", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Tablet/image-gallery-3.jpg?updatedAt=1737496737735"],
            desktop: ["https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Desktop/image-gallery-1.jpg?updatedAt=1737496759522", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Desktop/image-gallery-2.jpg?updatedAt=1737496759301", "https://ik.imagekit.io/ismaelbz/frontendMentor/audiophile/Products/Headphones/X99%20Mark%20II/DetailsGallery/Desktop/image-gallery-3.jpg?updatedAt=1737496759224"]
        }
    },
    boxContent: [
        {
            quantity: 1,
            item: "Headphone unit"
        },
        {
            quantity: 2,
            item: "Replacement earcups"
        },
        {
            quantity: 1,
            item: "User manual"
        },
        {
            quantity: 1,
            item: "3.5mm 5m audio cable"
        },
        {
            quantity: 1,
            item: "Travel bag"
        },
    ]
}

// Images
import XIcon from "./../../../assets/icons/x.svg";

// Mapped podruct details that show the infos to user
const product = new ProductDetails(productData);


export const ProductDetailed = () => {
    // Object used to handle product in cart information
    const [cartItem, setCartItem] = useState<CartItem>({
        thumbUrl: product.getImage("thumb"),
        thumbName: product.thumbName,
        price: product.price,
        priceFormatted: product.priceFormatted,
        quantity: 0
    }); 
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        handleWidth();
        window.addEventListener('resize', handleWidth)

        return (() => window.removeEventListener('resize', handleWidth))
    }, []);

    const handleQuantity = (operation: 'increase' | 'decrease') => {
        setCartItem(prev => ({
            ...prev,
            quantity: (operation == 'increase' ? prev.quantity + 1 
                : prev.quantity > 0 ? prev.quantity - 1 : 0)  
        }));
    }

    const handleWidth = () => {
        setWidth(window.innerWidth);
    }

    const media = (function detectMedia() {
        let media = ""
        if (width < 768) {
            media = 'mobile';
        } else if (width < 1024) {
            media = "tablet";
        } else if (width < 1280) {
            media = "laptop"
        } else if (width < 1440) {
            media = "desktop"
        } else {
            media = "wide"
        }
        return media;
    })();

    return (
        <div className="flex flex-col gap-[88px]">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center">
                {/* Image */}
                    <img className="max-h-[350px] object-cover rounded-lg 
                            md:max-h-[425px] md:max-w-[unset] md:w-full
                            2xl:max-w-[540px]" 
                            src={media == "mobile" ? product.getImage("mobile") : media == "tablet" ? product.getImage("tablet") : product.getImage("desktop")} 
                            alt="" 
                    />
                
                {/* Details - name, description, price, units, add to cart button*/}
                <div className="flex flex-col gap-6 xl:ml-16 2xl:ml-0 2xl:max-w-[83%] 2xl:justify-self-end
                ">
                    {/* Is New product */}
                    <p className="text-[14px] tracking-[10px] text-peru uppercase">
                        {product.isNewProduct && 'NEW PRODUCT'}
                    </p>
                    {/* Product Name */}
                    <h2 className="max-w-[200px] font-bold text-[28px]
                            md:text-[40px] md:max-w-[400px]
                            xl:leading-[1] 
                    ">
                        {product.name}
                    </h2>
                    {/* Description */}
                    <p className="text-[15px] text-gray
                            xl:text-start xl:leading-[1.7]
                    ">
                        {product.description}
                    </p>
                    {/* Price */}
                    <p className="font-bold text-[19px] tracking-[1.3px]">{product.priceFormatted}</p>
                    <div className="flex gap-4">
                        {/* Quantity */}
                        <div className="w-fit flex flex-row gap-2 items-center bg-ice ">
                            {/* Decrease Button */}
                            <button className="p-4"
                                onClick={() => handleQuantity('decrease')}
                            >
                                -
                            </button>

                            {/* Value */}
                            <p className="font-bold">
                                {cartItem.quantity}
                            </p>

                            {/* Increase Button */}
                            <button className="p-4"
                                onClick={() => handleQuantity('increase')}
                            >
                                +
                            </button>
                        </div>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </div>
            

            <div className="flex flex-col gap-[88px] 2xl:flex-row">
                {/* Features */}
                <div className="flex flex-col gap-6 2xl:basis-3/5">
                    <h3 className="font-bold text-[24px] uppercase">Features</h3>
                    {product.features.map((paragraph) => {
                        return (
                            <p className="text-[15px] text-gray">
                                {paragraph}
                            </p>
                        )
                    })}
                </div>

                {/* In the Box */}
                <div className="2xl:basis-2/5">
                    <h3 className="mb-6 font-bold text-[24px] uppercase">In the Box</h3>
                        <table>
                            <thead>
                                <tr className="sr-only">
                                    <th>Quantity</th>
                                    <th>Item(s)</th>
                                </tr>
                            </thead>
                            <tbody className="flex flex-col items-start">
                                {product.boxItems.map(({item, quantity}) => {
                                    return (
                                        <tr className="flex gap-5 font-bold text-gray">
                                            <td className="text-peru w-[30px]">{quantity} <span className={`content-[url(./assets/icons/x.svg)]`}></span></td>
                                            <td>{item}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                </div>
            </div>


            {/* Image Gallery */}
            <ul className="flex flex-col gap-5 md:grid md:grid-cols-2">
                <li className="md:order-1 md:row-start-1 md:row-end-2">
                    <img className="max-h-[500px] w-full object-cover rounded-lg 2xl:max-h-[280px]" src={media== "mobile" ? product.getDetailedImages("mobile")[0] : media == "tablet" ? product.getDetailedImages("tablet")[0] : product.getDetailedImages("desktop")[0]} alt="Description of the product details that can be seen in the image." />
                </li>
                <li className="md:order-3 md:row-start-2 md:row-end-3 ">
                    <img className="max-h-[500px] w-full object-cover rounded-lg 2xl:max-h-[280px]" src={media== "mobile" ? product.getDetailedImages("mobile")[1] : media == "tablet" ? product.getDetailedImages("tablet")[1] : product.getDetailedImages("desktop")[1]} alt="Description of the product details that can be seen in the image." />
                </li >
                <li className="md:order-2 md:row-start-1 md:row-end-3 ">
                    <img className="max-h-[500px] w-full object-cover rounded-lg md:max-h-[unset] md:h-full 2xl:max" src={media== "mobile" ? product.getDetailedImages("mobile")[2] : media == "tablet" ? product.getDetailedImages("tablet")[2] : product.getDetailedImages("desktop")[2]} alt="Description of the product details that can be seen in the image." />
                </li>
            </ul>       
        </div>
    )
}

export default ProductDetailed