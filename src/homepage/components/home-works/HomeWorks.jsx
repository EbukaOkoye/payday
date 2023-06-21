import DoneIcon from '@mui/icons-material/Done';
import webPage from '../../../assets/webpage.svg'
import checkbook from '../../../assets/checkbook.svg'
import happy from '../../../assets/image.svg'

const HomeWorks = () => {
  return (
    <div className="mt-20 grid place-items-center">
        <div className="home-works-texts">
            <h2 className="text-blueMain text-4xl md:text-6xl text-center mt-6">How it Works?</h2>
            <p className="text-paragraphText text-xs md:text-sm text-center mt-5">You can now take control of your finances even before <br /> your payday 
                with our three simplify process
            </p>
        </div>
        <div className="mt-20 grid gap-8 md:flex justify-evenly  p-4 place-items-center">
            <div className="left-side">
                <div className="works-signup">
                    <h2 className="text-blueMain text-2xl md:text-4xl my-2">Sign Up On <br /> Salary PayDay</h2>
                    <p className="text-paragraphText text-xs md:text-sm my-3">
                        You&apos;ll need to complete a simple online registration <br /> with your 
                        bio-data and employer details.
                    </p>
                </div>

                <div className="check-book mt-80">
                    <div className="checkbook-container overflow-hidden">
                        <img src={checkbook} alt="" />
                    </div>
                </div>
                <div className="pay mt-60">
                    <h2 className="text-blueMain text-2xl md:text-4xl my-2">Access up to <br /> 50% of your Pay</h2>
                    <p>
                        Get paid when you need it, not just when it&apos;s <br /> payday. You can 
                        access up to 50% of what you&apos;ve <br /> earned, up to 3 times every 
                        pay cycle.
                    </p>
                </div>
            </div>
            <div className="center-side hidden md:block">
                <div className="w-1 bg-lightBlue h-[100rem] relative">
                    <h2 className="bg-transparentBlue text-blueMain text-sm w-max px-4 py-2 rounded-2xl absolute top-0 -left-8">Step 1</h2>
                    <h2 className="bg-transparentOrange text-orangeMain text-sm w-max px-4 py-2 rounded-2xl absolute top-[32rem] -left-8">Step 2</h2>
                    <h2 className="bg-transparentBlue text-blueMain text-sm w-max px-4 py-2 rounded-2xl absolute top-[70rem] -left-8">Step 3</h2>
                    <h2 className="bg-transparentGreen text-greenMain text-sm w-max px-4 py-4 rounded-full absolute top-[100%] -left-6"><DoneIcon /> </h2>
                </div>
            </div>
            <div className="right-side">
                <div className="webImg-container md:-mt-[25rem]">
                    <img src={webPage} alt="" />
                </div>
                <div className="eligibility mt-52 w-full md:w-11/12 mx-auto">
                    <h2 className="text-blueMain text-4xl my-2">Check your <br /> eligibility </h2>
                    <p className="text-paragraphText text-sm my-3">
                        Using your salary account financial statement, <br /> we prequalify you 
                        for 50% if your monthly salary
                    </p>
                </div>
                <div className="happy-img-container md:translate-y-[23rem]">
                    <img src={happy} alt="" width={300} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeWorks