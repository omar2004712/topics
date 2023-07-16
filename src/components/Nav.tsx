import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='fixed inset-x-0 top-0 left-0 flex m-2 justify-between items-center px-5 py-4 bg-slate-800 rounded-lg text-white font-semibold text-lg'>
      <Link href='/'>Topics</Link>
      <Link
        className='border border-slate-100 hover:bg-white hover:text-slate-800 transition-all px-3 py-1 rounded'
        href='/add-topic'
      >
        Add Topic
      </Link>
    </nav>
  );
}
