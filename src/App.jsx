import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Counter from './components/Counter/Counter'
import InputText from './components/InputText/InputText'

function App() {
  

  return (
    <>
      <div className="App">
        <h1>Home page</h1>
        <Counter title="IceCreamApp" initCounter={7}/>
        <Counter title="Coco App" /> 
        <Counter initCounter={3}/>
        <InputText initText="Welcome"/>
      </div>
    </>
  )
}

export default App
