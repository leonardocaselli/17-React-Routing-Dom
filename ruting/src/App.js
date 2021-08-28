
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import Navbar from './complements/Navbar';
import Home from './complements/Home';
import Number from './complements/Number';
import Leters from './complements/Leters';
import MultEntrada from './complements/MultEntrada';
function App() {
  const { mydata } = useParams()
  //mydata
  //({ match: { url } })
  //{params:{mydata}}
  const RoterNumorMensaje = ({ match: { params } }) => {
    console.log("entro ")
    console.log(params)
    console.log(params.mydata)
    if (isNaN(params.mydata)) {
      console.log(" ++ if ++")
      return <Route exact path="/:mydata" component={Leters} />
    }
    else {
      console.log(" ++ else ++")
      return <Route exact path="/:mydata" component={Number} />
    }
  }


  return (
    <div >
      <h1>Routers desde APP</h1>
      <Navbar />
      <Switch>
        {/* http://localhost:3000 */}
        <Route exact path="/" component={Home} />



        {/* http://localhost:3000 /text/colortext/backcolor}*/}
        <Route exact path="/:mydata/:colorText/:colorFondo" component={MultEntrada} />

        {/* http://localhost:3000 /Number*/}
        {/* <Route exact path="/:mydata" component={Number} /> */}
        <Route exact path="/:mydata" component={RoterNumorMensaje} />


      </Switch>
    </div>
  );
}

export default App;
