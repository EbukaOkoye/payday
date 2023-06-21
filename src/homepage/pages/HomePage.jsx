import AccessBanner from "../components/HomeBannerAccess./AccessBanner"
import Nav from "../components/Nav"
import Footer from "../components/footer/Footer"
import HomeCovered from "../components/home-covered/HomeCovered"
import HomeOffer from "../components/home-offer/HomeOffer"
import HomeWorks from "../components/home-works/HomeWorks"


const HomePage = () => {
  return (
    <div>
        <Nav />
        <AccessBanner />
        <HomeOffer />
        <HomeWorks />
        <HomeCovered />
        <Footer />
    </div>
  )
}

export default HomePage