import { Fragment } from "react/jsx-runtime"

import Cabecalho from "../../componentes/Cabecalho"
import Corpo from "../../componentes/Corpo"

function Home() {

    return (<Fragment>
        <Cabecalho texto="Receitas da Vovó" />
            <Corpo />
    </Fragment>)    
}

export default Home