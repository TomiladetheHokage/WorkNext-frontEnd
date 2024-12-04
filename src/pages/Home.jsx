import Hero from "../components/Hero.jsx";
// import Statista from "../components/Statista.jsx";
import RecentJobs from "../components/RecentJobs.jsx";
import BrowseCategory from "../components/BrowseCategory.jsx";
import Test from "../components/Test.jsx";

const Home = () => {
    return (
       <>
           <Hero/>
           <RecentJobs />
           <BrowseCategory/>
           <Test/>
           {/*<Statista/>*/}

           {/*<Statistics/>*/}
       </>
    )
}
export default Home