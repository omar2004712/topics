'use client';

import { ITopic } from '@models/topic';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

interface TopicFormProps {
  submissionText: string;
  topic?: ITopic;
  submitUrl: string;
  method: 'post' | 'put';
}

export default function TopicForm({
  submissionText,
  topic,
  submitUrl,
  method,
}: TopicFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(topic?.title || '');
  const [description, setDescription] = useState(topic?.description || '');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(submitUrl, {
      method,
      body: JSON.stringify({ title, description }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    router.push('/');
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={onSubmit}>
      <i className='text-sm text-slate-400 flex gap-3 items-center'>
        <i className='fa-solid fa-circle-info' />
        Click on the fields to start typing
      </i>
      <input
        name='title'
        type='text'
        placeholder='Topic Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='outline-none p-3 border border-transparent focus:border-slate-600 transition-all w-full rounded text-2xl font-semibold'
      />
      <textarea
        name='description'
        placeholder='Topic Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='outline-none p-3 rounded resize-none h-60 w-full border border-transparent focus:border-slate-600 transition-all text-slate-400'
      />
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
