import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Product from './components/Product'
import ColorPicker from './components/ColorPicker'
import ManageCart from './components/ManageCart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*<Route exact path="/" element={<Product />} />*/}
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/colorPicker" element={<ColorPicker />} />
          <Route exact path="/manageCart" element={<ManageCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
