const Submit = ({title,...props}) => {
    return (
        <div className="flex">
            <button type="submit" className="relative overflow-hidden ml-auto inline-block py-[10px] px-[20px] text-[#b79726] text-xl mt-[20px] tracking-[4px] duration-500 hover:bg-[#f49803] hover:text-white hover:rounded hover:button-shadow" {...props}>
                <span className="animate-rotating-line"></span>
                <span className="animate-rotating-line"></span>
                <span className="animate-rotating-line"></span>
                <span className="animate-rotating-line"></span>
                {title}
            </button>
        </div>
    );
}

export default Submit;