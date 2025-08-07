import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Página não encontrada!</h1>
      <Link className="border-2 rounded p-2" to='/'>Voltar</Link>
    </div>
  )
}

export default Error;
