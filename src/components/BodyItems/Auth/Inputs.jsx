export default function Inputs({type, value, handleChange, placeholder}) {
  return (
    <>
        <input required className="font-sans rounded-md py-3 w-full px-4 mb-4 outline-none focus:border border-[#ff5c11]  placeholder:text-slate-600" type={type} value={value} onChange={handleChange} placeholder={placeholder} />
    </>
  )
}
