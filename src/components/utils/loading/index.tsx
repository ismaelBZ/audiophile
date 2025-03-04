import LoadingIcon from "./../../../assets/utils/loading/loading.svg"

const Loading = () => {
    return (
        <div className="py-[100px] flex items-center justify-center">
            <img className="w-[50px] h-[50px] animate-spin" src={LoadingIcon} alt="Loading" />
        </div>
    )
}
export default Loading