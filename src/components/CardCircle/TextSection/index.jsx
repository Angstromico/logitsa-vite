import { useFunctions } from '@/Hooks'

const TextSection = ({ props }) => {
  const { title, content } = props
  const { splitIntoParagraphs } = useFunctions()

  return (
    <div className='px-6 pt-4'>
      <h3 className='text-orangePink font-semibold text-center text-sm md:text-base mb-1'>
        {title}
      </h3>
      {splitIntoParagraphs(
        content,
        'text-center text-[0.6rem] w-48 sm:56 md:w-72 md:text-[0.7rem] lg:w-[22rem] pb-[5px]'
      )}
    </div>
  )
}
export default TextSection
