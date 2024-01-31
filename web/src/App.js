import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Offer from "./components/offers";
import About from "./components/about";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dishes from "./components/dishes";
import Testimonal from "./components/testimonal";
import Footer from "./components/footer";
import Heading from "./components/Heading";
import Feedback from "./components/feedback";
import { getApiMethod } from "./Api";
import { HashLoader } from "react-spinners";

const App = () => {
  const [allOffers, setAllOffers] = useState([])
  const [allCategory, setAllCategory] = useState([])
  const [allDishes, setAllDishes] = useState([])
  const [allFeedback, setAllFeedback] = useState([])
  const [load, setLoad] = useState(false)
  const init = async () => {
    setLoad(true)
    const [{ data, status }, getDishes, getCategory, feedback] = await Promise.all([
      getApiMethod("/offer/getAllOffer"),
      getApiMethod("dish/getDishes"),
      getApiMethod("dish/categories"),
      getApiMethod("/feedback/getFeedbacks")])
    if (status === 200) {
      setLoad(false)
      const imageUrl = data?.map(({ image }) => {
        return image?.url
      })
      setAllOffers(imageUrl)
      const addAllCategorySec = getCategory?.data
      addAllCategorySec?.unshift('All')
      setAllCategory(addAllCategorySec)
      const addClickProperty = getDishes?.data?.map((item) => {
        return { ...item, isClicked: false }
      })
      setAllDishes(addClickProperty)
      setAllFeedback(feedback?.data)
    }
    setLoad(false)
  }

  useEffect(() => {
    init()
  }, [])
  const [open, setOpen] = useState(false);
  return (
    <div>
      {
        load ? <div className="flex justify-center items-center h-screen">
          <HashLoader color="#fff" size={40} />
        </div> : <>
          <Navbar setOpen={setOpen} />
          <Hero />
          <Offer Offer={allOffers} />
          <Heading>About</Heading>
          <About />
          <Heading>Dishes</Heading>
          <Dishes open={open} setOpen={setOpen} allCategory={allCategory} allDishes={allDishes} />
          <Heading>Testimonals</Heading>
          <Testimonal feedback={allFeedback} />
          <Heading>Get In Touch</Heading>
          <Feedback />
          <Footer />
        </>
      }

    </div>
  );
};
export default App;
