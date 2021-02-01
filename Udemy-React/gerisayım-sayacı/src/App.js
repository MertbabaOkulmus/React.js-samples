import './App.css';
import {makeStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import GeriSayim from "./components/GeriSayim";
import clocks from "./images/paris-clocks.jpg";

const useStyles=makeStyles(theme=>({
  container:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    height:"100vh",
    backgroundImage:`url(${clocks})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:false,
  }
}))

const App = () => {
  const classes=useStyles();//classes.container deyip container özelliklerini istediğimiz yerde kullana biliriz
  return (
    <div className={classes.container}>
    <Container maxWidth="sm">
      <GeriSayim/>
    </Container>  
    </div>
  );
}

export default App;
