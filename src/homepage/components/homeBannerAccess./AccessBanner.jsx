import IconBtn from "../../../global-components/IconBtn"
import OrangeButton from "../../../global-components/OrangeButton"
import accessImg from '../../../assets/access.svg'


const AccessBanner = () => {
  return (
    <div className="mt-20">
        <div className="access-texts grid place-items-center gap-3 p-4">
            <div className="access-bold">
                <h1 className="text-4xl md:text-6xl text-center">
                    <p className="text-blueMain">Access Your Pay</p>
                    <p className="text-orangeMain">Before PayDay</p>
                </h1>
            </div>
            <div className="access-paragraph">
                <p className="text-paragraphText text-lg text-center md:w-1/2 mx-auto my-6 p-4">
                    Unlock a portion of your earned pay to make life a little easier. 
                    We empower you to access your advance salary up to 70% of what you’ve 
                    earned every pay cycle.
                </p>
            </div>
            <div className="access-btn grid md:flex gap-4 my-6">
                <OrangeButton size='medium' text='Get Started' sx={{borderRadius: 30, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2,}} />
                <IconBtn text='Learn more' sx={{backgroundColor: '#1C468A', borderRadius: 30, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2}} />
            </div>
        </div>
        <div className="access-img p-4 flex justify-center">
            <img src={accessImg} alt="" />
        </div>
    </div>
  )
}

export default AccessBanner