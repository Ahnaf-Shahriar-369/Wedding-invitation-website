// import Image from "next/image"
import Hero1 from "./components/hero1";
import HappyCouple from "./components/meet";
import CountDownTimer from "./components/timer";
import CardsLayout from "./components/cardsLayout";


export default function Home() {
  return (
    <>
    
      <div className="bg-[#FFF3FB]">
      
        <Hero1></Hero1>

        <HappyCouple  ></HappyCouple>

        <CountDownTimer></CountDownTimer>

        <CardsLayout></CardsLayout>

        <div className="">

        

        </div>

        
      
      </div>
    
    </>
  );
}
