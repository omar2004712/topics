import TopicForm from '@components/TopicForm';

export default function AddTopic() {
  return (
    <TopicForm
      submissionText='Add Topic'
      submitUrl={`${process.env.WEB_URL}/api/topics`}
      method='post'
    />
  );
}
