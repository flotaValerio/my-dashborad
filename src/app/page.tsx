import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard/main');
  // Dejo lo de abajo para mostratrar que con el redirect no se sigue la ejecucion de la app, la redirigimos al dashboard
  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  );
}
