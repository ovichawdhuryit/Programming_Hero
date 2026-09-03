
import './App.css'

function App() {


  return (

    <> 
    <Text xyz = "Is it working ! "/>
    <Text xyz = "Hey, I did it"/>

   </>
  )
}

function Text ({xyz}) {
  return (
   <p> {xyz} </p>
  );
}

export default App
