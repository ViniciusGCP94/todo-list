import { Link, Outlet } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
        <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-6 text-slate-200">Menu Principal</h1>
            <nav className="flex flex-col space-y-4">
                <Link to="/" className="hover:text-blue-400">Dashboard</Link>
                <Link to="/maquinas" className="hover:text-blue-400">Máquinas</Link>
                <Link to="/ordens" className="hover:text-blue-400">Ordens de Serviço</Link>
            </nav>
        </aside>

      <main className="flex-1 p-8 text-white">
        <Outlet />
      </main>

    </div>
  )
}

export default MainLayout