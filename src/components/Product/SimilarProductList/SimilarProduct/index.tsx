import { useProductQuery } from "../../../../hooks/querys/useProductsQuery";
import Button from "../../../utils/buttons/Primary"

export const SimilarProduct = ({title, imgUrl, productUrl} : {imgUrl : string, title: string, productUrl: string}) => {
    const handleQuery = () => {useProductQuery(productUrl)}
    
    return (
        <div className="flex flex-col justify-between gap-8 items-center">
            <img className="w-full h-[150px] lg:h-[320px] max-w-[320px] object-cover rounded-lg" src={imgUrl} alt="" />
            <h4 className="font-bold uppercase text-[24px] md:text-[20px] md:text-center">{title}</h4>
            <Button to={productUrl} onClick={handleQuery}/>
        </div>
    )
}