import { useEffect, useState } from "react"
import slider from '../../assets/image.svg'
import slider1 from '../../assets/image1.svg'
import slider2 from '../../assets/image2.svg'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../../styles/carousel.css'

const LoginCarousel = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0)


    const images = [
        {image: slider, },
        {image: slider1},
        {image: slider2},
    ]

    const title = [
        'Early Prequalification and limitless Access',
        'Simple and Easy',
        'Visibility & Transparency'
    ]
    const texts = [
        'Get Prequalified Early and have unlimited access to your earned pay.',
        'After All, It\'s Your Pay. With SalaryPayDay, you can access up to 50% of your earned pay before payday.',
        'Check how much you have available anytime, anywhere. '
    ]

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === images.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const slideToIndex = (index) => {
        setCurrentIndex(index)
    }

    useEffect( () => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [nextSlide])
   

  return (
    <div className="w-full h-full relative group mt-20">
        <div style={{backgroundImage: `url(${images[currentIndex].image})`}} className="h-1/2 p-8 bg-center bg-contain bg-no-repeat duration-700">
           
        </div>
        <h2 className="text-center mt-3 text-lg hidden md:block">{title[currentIndex]}</h2>
        <p className="text-center text-xs text-grey hidden md:block">{texts[currentIndex]}</p>
        {/* Left Arrow */}
        <div className='hidden group-hover:flex absolute top-[25%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer flex items-center'>
            <KeyboardArrowLeftIcon onClick={prevSlide} fontSize='medium' />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:flex absolute top-[25%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer flex items-center'>
            <KeyboardArrowRightIcon onClick={nextSlide} fontSize='medium' />
        </div>
        <div className="dots flex top-4 justify-center py-2">
            {
                images.map( (image, index) => (
                    <div className="cursor-pointer" key={index} onClick={() => slideToIndex(index)}>
                        <FiberManualRecordIcon className="text-orangeMain" fontSize="small" />
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default LoginCarousel