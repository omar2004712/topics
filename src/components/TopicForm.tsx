import Link from 'next/link';

interface TopicFormProps {
  submissionText: string;
}

export default function TopicForm({ submissionText }: TopicFormProps) {
  return (
    <form className='flex flex-col gap-3'>
      <i className='text-sm text-slate-400 flex gap-3 items-center'>
        <i className='fa-solid fa-circle-info' />
        Click on the fields to start typing
      </i>
      <input
        type='text'
        placeholder='Topic Title'
        className='outline-none p-3 border border-transparent focus:border-slate-600 transition-all w-full rounded text-2xl font-semibold'
      />
      <textarea
        placeholder='Topic Description'
        className='outline-none p-3 rounded resize-none h-60 w-full border border-transparent focus:border-slate-600 transition-all text-slate-400'
      ></textarea>
      <div className='flex gap-3 font-bold items-stretch'>
        <Link
          className='bg-red-100 text-red-800 hover:bg-red-200 transition-all px-4 py-1.5 rounded'
          href='..'
        >
          Cancel
        </Link>
        <button
          className='bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all px-4 py-1.5 rounded'
          type='submit'
        >
          {submissionText}
        </button>
      </div>
    </form>
  );
}
