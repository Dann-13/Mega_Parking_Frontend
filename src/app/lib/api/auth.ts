export async function loginUser(email: string, password: string) {
  const res = await fetch(`http://localhost:3000/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // <--- Muy importante para cookies httpOnly
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Error al iniciar sesión');
  }

  return res.json(); // Esto solo tendrá { message: 'Inicio de sesión exitoso' }
}
