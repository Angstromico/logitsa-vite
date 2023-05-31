const Button = ({ text }) => {
  return (
    <div className='px-6 pt-4 pb-5 mx-auto w-full flex justify-center items-center md:absolute md:bottom-5 md:left-1/2 md:transform md:-translate-x-1/2'>
      <button
        type='button'
        className='bg-transparent hover:bg-white transition-all text-blue-700 text-sm md:text-base hover:text-carbonBlue py-1 px-4 border-2 border-blue-500 hover:border-transparent rounded'
      >
        {text}
      </button>
    </div>
  )
}
export default Button
