import Cabecalho from "../../componentes/Cabecalho"
import Corpo from "../../componentes/Corpo"

function Home() {

    return (<div>
        <Cabecalho texto="Receitas da Vovó" />
        <div className="container">
            <Corpo />
        </div>
    </div>)
}

export default Home