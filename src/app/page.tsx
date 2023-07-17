import Topic from '@components/Topic';
import { ITopic } from '@models/topic';

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }

    return res.json();
  } catch (err) {
    console.error('Error loading topics: ', err);
  }
};

export default async function Home() {
  const topics = await getTopics();

  if (topics instanceof Array)
    return topics.map((topic: ITopic) => (
      <Topic topic={topic} key={topic._id.toString()} />
    ));

  return null;
}
