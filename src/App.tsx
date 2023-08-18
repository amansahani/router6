import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import Home from './home/home';
function App() {
  return (
    <div className="dark:bg-black dark:text-white flex justify-center items-center min-h-screen text-xl font-semibold">
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/prep' Component={learn}>
            <Route path='ml' Component={ml} >  </Route>
            <Route path='gate' Component={gate} />
            <Route path='extra' element={<Extract/>} >
            <Route path=':id' ></Route>
            </Route>
          </Route>        
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const learn = () => (
  <div className='dark:text-white'>
    <Link className='text-cyan-300'  to={'/prep/ml'}>
      <li><p>ML</p></li>
    </Link>
    <Outlet/>
    <Link to={'/prep/gate'} className='text-cyan-300'>
      <li><p>GATE</p></li>
    </Link>
    
  </div>
)
const ml = () =>(
  <div>
    <h1>ML</h1>
  </div>
)
const gate = () =>(
  <div>
    <h1>GATE</h1>
  </div>
)
const  Extract = () =>{
  const {id} = useParams();
  return(
    <div>
      <p>Extra {id}</p>
    </div>
  )
}