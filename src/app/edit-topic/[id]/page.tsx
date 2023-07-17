import TopicForm from '@components/TopicForm';

const getTopic = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
    method: 'get',
    cache: 'no-store',
    next: {
      revalidate: 0,
    },
  });

  return res.json();
};

export default async function EditTopic({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const topic = await getTopic(id);

  return (
    <TopicForm
      submissionText='Update Topic'
      topic={topic}
      submitUrl={`http://localhost:3000/api/topics/${id}`}
      method='put'
    />
  );
}
