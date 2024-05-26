import SectionLogin from "../components/organisms/SectionLogin";
import SectionView from "../components/organisms/SectionView";
import './Home.css'
function Home() {
    return ( <>
    <section id="login">
        <div id="login-home">
            <SectionLogin></SectionLogin>
        </div>    
 </section>
    <section id="view">
        <SectionView></SectionView>
        </section>
        </>
     );
}

export default Home;