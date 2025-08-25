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
     <button onClick={handleLogout} className="w-full text-left">
      Cerrar sesión
    </button>
  );
}
