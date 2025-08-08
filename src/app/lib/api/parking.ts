const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

interface ParkingRecord {
  id: string;
  plate: string;
  entryTime: string;
  exitTime?: string;
}
export async function registerVehicleEntry(plate: string) {
  const res = await fetch(`${API_BASE_URL}/parking/entry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ plate }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Error registrando la entrada');
  }

  return res.json();
}

export const registerExit = async (plate: string): Promise<ParkingRecord> => {
  const response = await fetch(`${API_BASE_URL}/parking/exit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ plate }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al registrar salida');
  }

  return response.json();
};

export const getAllRecords = async (): Promise<ParkingRecord[]> => {
  const response = await fetch(`${API_BASE_URL}/parking`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener registros');
  }

  return response.json();
};