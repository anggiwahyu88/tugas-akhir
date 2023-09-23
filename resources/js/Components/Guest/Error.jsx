const Error = ({ message, ...props }) => {
    return message ? (
        <p {...props} className="text-xl text-red-600 font-bold mt-[10px]">
            {message}
        </p>
    ) : "";
}

export default Error;