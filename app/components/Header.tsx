// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-transparent">
      <div className="text-2xl font-bold">Rsound</div>
      <nav className="flex space-x-6 text-lg">
        <Link href="#">Premium</Link>
        <Link href="#">Help</Link>
        <Link href="#">Download</Link>
      </nav>
      <div className="flex space-x-4 text-lg">
        <Link href="#">Log in</Link>
        <Link href="#" className="font-semibold">Sign up</Link>
      </div>
    </header>
  );
}

