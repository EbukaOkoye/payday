import LoginCarousel from "../../login/components/LoginCarousel"
import SignupForm from "./SignupForm"


const SignupBanner = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-2 min-h-screen w-11/12">
        <div className="bg-greyBg p-3 h-96 md:h-auto hidden lg:block">
          <h2 className="text-lg mt-4 ml-4">
          <span className="text-orangeMain">Salary</span>
          <span className="text-blueMain">PayDay</span>
          </h2>
          <LoginCarousel />
      </div>
      <div className="flex flex-col justify-center items-center p-4 mx-auto">
        <h3 className="text-textGray text-sm my-4 mr-auto ml-3">User Sign Up</h3>
        <h1 className="text-blueMain text-3xl my-4 mr-auto ml-3">Get Started</h1>
        <SignupForm />
      </div>
    </div>
  )
}

export default SignupBanner