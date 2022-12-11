import "./style.css"
import AreaCPF  from "../Input"

const BodyComp =() =>{
    return(
        <>
        <main className="corpo">
            <h1>DIGITE AQUI O SEU CPF</h1>
            <AreaCPF/>
        </main>
        </>
    )
}

export default BodyComp;