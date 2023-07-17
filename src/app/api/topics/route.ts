import { connectMongoDB } from '@libs/db';
import { Topic } from '@models/topic';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { title, description }: { title?: string; description?: string } =
    await request.json();

  await connectMongoDB();

  const topic = await Topic.create({ title, description });

  return NextResponse.json(topic, { status: 200 });
}

export async function GET() {
  await connectMongoDB();

  const topics = await Topic.find();

  return NextResponse.json(topics, { status: 200 });
}
