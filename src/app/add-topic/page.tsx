import TopicForm from '@components/TopicForm';

export default function AddTopic() {
  return (
    <TopicForm
      submissionText='Add Topic'
      submitUrl={`/api/topics`}
      method='post'
    />
  );
}
