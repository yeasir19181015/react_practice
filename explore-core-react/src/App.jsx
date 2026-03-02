import { Suspense } from 'react';
import './App.css';
import Countries from './components/countries/countries';


const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())


function App() {
 
  return (
    <>
    <Suspense fallback={<p>Nadir vai loading...</p>}>
     <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
      

    </>
  )
}

// function Developer (props){
//   return(
//     <div style={{
//       border: '5px solid green',
//       borderRadius: '20px'
//     }}>
//       <h3>Developer :{props.name}</h3>
//       <p>Technology: {props.tech}</p>
//     </div>
//   )
// }

// function Student(){
//   return(
//     <div>
//       <p> Name:</p>
//       <p> Dept:</p>
//     </div>
//   )
// }
export default App
