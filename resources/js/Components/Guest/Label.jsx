const Label = ({value, data}) => {
    return ( 
        <label className={`absolute left-0  py-[10px] transition-all duration-500 pointer-events-none ${data.isFocus|| data.value ? "top-[-17px] text-orange-600 text-base" : "top-0 text-white text-lg"}`}>{value}</label>
     );
}
 
export default Label;