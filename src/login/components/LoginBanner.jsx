import LoginCarousel from "./LoginCarousel"
import LoginForm from "./LoginForm"


const LoginBanner = () => {
    


  return (
    <div className="grid gap-4 lg:grid-cols-2 mx-auto min-h-screen w-full">
      <div className="bg-greyBg p-3 h-96 md:h-auto hidden lg:block">
        <h2 className="text-lg mt-4 ml-4">
          <span className="text-orangeMain">Salary</span>
          <span className="text-blueMain">PayDay</span>
        </h2>
        <LoginCarousel />
      </div>
      <div className="flex flex-col justify-center items-center p-4 mx-auto">
        <div className="">
          <h3 className="text-textGray text-sm my-4 text-left relative -left-10 md:-left-36">Sign in to continue</h3>
          <h1 className="text-blueMain text-3xl my-4 relative -left-10 md:-left-36">Get back in</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginBanner