import type { IReceita } from "../../interfaces/Receita"

interface FormularioProps {
    receita: IReceita
}

const Formulario = ({receita}: FormularioProps) => {


    return (
        <div className="modal fade" id="exampleModal" tab-index="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{receita.nome}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario