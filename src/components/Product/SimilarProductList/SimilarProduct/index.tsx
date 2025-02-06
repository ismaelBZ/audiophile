import Button from "../../../utils/buttons/Primary"

export const SimilarProduct = ({title, imgUrl, productUrl} : {imgUrl : string, title: string, productUrl: string}) => {

    return (
        <div className="flex flex-col gap-8 items-center max-w-[320px]">
            <img className="max-h-[320px] w-full object-cover rounded-lg" src={imgUrl} alt="" />
            <h4 className="font-bold uppercase text-[24px] md:text-[20px] md:text-center">{title}</h4>
            <Button to={productUrl} />
        </div>
    )
}