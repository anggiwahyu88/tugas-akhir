const Input = ({...props}) => {
    return (
        <input
            {...props}
            className="w-full py-[10px] pl-0 text-lg text-white border-none border-b-4 outline-none bg-transparent focus:ring-0 focus:ring-offset-0"
            style={{ borderBottom: "1px solid #fff" }}
        />
    );
}

export default Input;