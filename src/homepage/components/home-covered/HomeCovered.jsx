import OrangeButton from "../../../global-components/OrangeButton"


const HomeCovered = () => {
  return (
    <div className="mt-32 p-5">
        <div className="container bg-blueMain p-6 rounded-[40px] grid place-items-center md:w-4/5 md:mx-auto">
            <h2 className="text-2xl md:text-4xl text-white my-4 text-center">SalaryPayDay got <br /> you covered. </h2>
            <p className="text-xs md:text-sm my-4 text-white text-center">
                The countdown to payday just got shorter
            </p>
            <OrangeButton text='Get Started' size='small' sx={{borderRadius: 30, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2,}} />
        </div>
    </div>
  )
}

export default HomeCovered