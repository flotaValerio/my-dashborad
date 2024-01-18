import { CartCounter } from '@/app/shoping-card/components/CartCounter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart',
};

export default function CounterPage() {
  const value = 20;
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Productos en el Carrito</span>
      <CartCounter value={value} />
    </div>
  );
}
