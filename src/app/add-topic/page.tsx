import TopicForm from '@components/TopicForm';

export default function AddTopic() {
  return (
    <TopicForm
      submissionText='Add Topic'
      submitUrl='http://localhost:3000/api/topics'
      method='post'
    />
  );
}
