import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  

  return (
    <>
      <div className="App">
        <h1>Home page</h1>
        <Counter title="IceCreamApp" initCounter={7}/>
        <Counter title="Coco App" />
        <Counter initCounter={3}/>

      </div>
    </>
  )
}

export default App
