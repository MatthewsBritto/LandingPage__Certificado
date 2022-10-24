import './main'
import { MainContainer, CenterContainer} from './styles'
import FormInfos from './componets/FormInfos';
import Hero from './componets/Hero';
import Coments from './componets/Coments';
import WhatsBtn from './componets/WhatsBtn';
import Intro from './componets/Intro';
import Difs from './componets/Difs';



function Container() {


  return (
    <MainContainer>
      <CenterContainer>
        <Intro/>
        <FormInfos/>
        <Difs/>
        <Coments/>
        <Hero/> 
        <WhatsBtn/>          
      </CenterContainer>
    </MainContainer>
  )
}

export default Container
