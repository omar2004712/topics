import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='fixed max-w-screen-md md:mx-auto inset-x-1 top-0 flex m-2 justify-between items-center px-5 py-4 bg-slate-800 rounded-lg text-white font-semibold text-lg'>
      <Link className='text-2xl' href='/'>
        Topics
      </Link>
      <Link
        className='border border-slate-100 hover:bg-white hover:text-slate-800 transition-all px-3 py-1 rounded'
        href='/add-topic'
      >
        Add Topic
      </Link>
    </nav>
  );
}
