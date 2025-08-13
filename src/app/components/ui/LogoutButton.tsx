'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token'); // Elimina la cookie
    router.push('/login');   // Redirige al login
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded absolute top-6 right-6"
    >
      Cerrar sesión
    </button>
  );
}
