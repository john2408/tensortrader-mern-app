import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Sidemenu from './components/Sidemenu';

//Screens
import HomeScreen from './screens/HomeScreen';
import ChartScreen from './screens/ChartScreen';
import TableScreen from './screens/TableScreen';
import PerformanceScreen from './screens/PerformanceScreen';



function App() {

  const [sideToggle, setSideToggle] = useState(false); 


  return (
    <Router>
    
      <Sidemenu />
      <Navbar click = {() => setSideToggle(true)}/>
      
      <SideDrawer show={sideToggle} click = {() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click = {() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path = "/" component={HomeScreen}/>
          <Route exact path = "/trading/" component={TableScreen}/>
          <Route exact path = "/trading/:id" component={TableScreen}/>
          <Route exact path = "/performance/" component={PerformanceScreen}/>
          <Route exact path = "/backtest/:id" component={ChartScreen}/>
          
        </Switch>
      
        
      </main>

    
    </Router>
  );
}

export default App;

