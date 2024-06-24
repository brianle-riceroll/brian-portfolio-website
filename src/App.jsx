import Header from './Header.jsx'
import About from './About.jsx'

function App() {
  return (
    <>
      <Header name="Brian Le" className="header"></Header> 
      <div style={{marginBottom: "10em"}}></div>
      <About></About>
    </>
  );
}

export default App
