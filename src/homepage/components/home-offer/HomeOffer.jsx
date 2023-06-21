import { offerCards } from "../../../utilities/utils"

const HomeOffer = () => {
  return (
    <div className="mt-20 p-8">
        <div className="offer-texts p-4 grid place-items-center">
            <h1 className="text-4xl md:text-6xl text-blueMain my-5">What we offer</h1>
            <p className="text-paragraphText text-lg my-5 text-center">
                SalaryPayDay is able to take away the pain of waiting for payday by <br /> 
                giving you a new finan cial breathing space and less financial stress
            </p>
        </div>
        <div className="offer-cards grid gap-4 p-4 place-items-center md:grid-cols-3 my-8">
            {
                offerCards.map( (card, index) => (
                    <div className={`rounded-lg bg-greyBg p-6 ${(index === 0 || index === 2) ? 'h-fit md:h-[17.3rem]' : 'h-fit'}`} key={index}>
                        <div className="my-6">
                            <img src={card?.image} alt="" />
                        </div>
                        <h2 className="text-lg md:text-2xl text-blueMain my-6">{card?.heading}</h2>
                        <p className="text-xs text-textGray my-6">{card?.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HomeOffer