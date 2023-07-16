import Link from 'next/link';
import RemoveButton from './RemoveButton';
import { HiPencilAlt } from 'react-icons/hi';

export default function TopicsList() {
  return (
    <div className='p-4 border border-slate-300 my-3 flex justify-between rounded'>
      <div className='flex flex-col gap-3'>
        <h2 className='font-semibold text-2xl'>Topic Title</h2>
        <div className='text-slate-400'>Topic Description</div>
      </div>
      <div className='flex gap-2 items-start'>
        <RemoveButton />
        <Link href='/edit-topic/123' className='text-slate-800'>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}
