import { useState } from "react"
import './App.css'

function App() {

  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)


  const returnImc = () => {
    const IMC = (weight / height ** 2).toFixed(2)
    if (IMC > 40){
      return <p>Seu IMC é de {IMC} e você está com <b>obesidade grau 3.</b></p>
    }else if (IMC > 35){
      return <p>Seu IMC é de {IMC} e você está com <b>obesidade grau 2.</b></p>
    }else if(IMC > 30){
      return <p>Seu IMC é de {IMC} e você está com <b>obesidade grau 1.</b></p>
    }else if(IMC > 25){
      return <p>Seu IMC é de {IMC} e você está com <b>sobrepeso.</b></p>
    }else if(IMC > 18.5){
      return <p>Seu IMC é de {IMC} e você está com o <b>peso normal.</b></p>
    }else if(IMC <= 18.5){
      return <p>Seu IMC é de {IMC} e você está <b>abaixo do peso.</b></p>
    }else{
      return <p>Digite uma altura e peso para cálculo do IMC.</p>
    }
  }

  return (
    <div className = "container">
      <h1>Cálculo de IMC</h1>
        <form className="form">
          <input className="input1" type="number" placeholder="Digite seu peso" step="0.10" onChange={event => setWeight(event.target.value)}/>
          <input className="input2" type="number" placeholder="Digite sua altura" step="0.010" onChange={event => setHeight(event.target.value)} />
        </form>
        <p className="paragrafo">{returnImc()}</p>
    </div>
    )
}
export default App
