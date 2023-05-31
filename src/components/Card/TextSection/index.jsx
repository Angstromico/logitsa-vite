import { useFunctions } from '@/Hooks'

const TextSection = ({ props }) => {
  const { title, content } = props
  const { splitIntoParagraphs } = useFunctions()

  return (
    <div className='px-6 pt-4'>
      <h2 className='font-bold text-center text-[1.5rem] md:text-[1.7rem] mb-1'>
        {title}
      </h2>
      <div className='flex justify-center items-center mb-4'>
        <div className='bg-orangePink h-[3px] w-20 md:w-24'></div>
      </div>
      {splitIntoParagraphs(
        content,
        'text-center text-[0.7rem] md:text-[0.9rem] pb-[5px]'
      )}
    </div>
  )
}
export default TextSection
