const Error = ({ message,className, ...props }) => {
    return message ? (
        <p {...props} className={`text-xl text-red-600 font-bold mt-[10px] ` + className}>
            {message}
        </p>
    ) : "";
}

export default Error;