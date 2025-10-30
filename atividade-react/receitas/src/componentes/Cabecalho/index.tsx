interface CabecalhoProps {
    texto: string
}

const Cabecalho = ({ texto}: CabecalhoProps) => {

    return (
    <header className="text-center py-4">
    <h1>{texto}</h1> </header>)
}

export default Cabecalho