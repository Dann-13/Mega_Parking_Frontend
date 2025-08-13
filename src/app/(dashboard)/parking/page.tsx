import LogoutButton from '@/app/components/ui/LogoutButton';
import { EntryForm } from './components/EntryForm';
import { Records } from './components/Records';

export default function ParkingPage() {

  return (
    <main className="container mx-auto py-8">
      <LogoutButton />
      <h1 className="text-3xl font-bold text-center mb-8">Sistema de Gestión de Parking</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <EntryForm />
        </div>
        
        <div>
          <Records />
        </div>
      </div>
    </main>
  );
}