import { connectMongoDB } from '@libs/db';
import { Topic } from '@models/topic';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await connectMongoDB();

    const topic = await Topic.findById(id);

    return NextResponse.json(topic, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongoDB();

    const topic = await Topic.findByIdAndDelete(params.id);

    return NextResponse.json(topic, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { title, description } = await request.json();

    await connectMongoDB();

    const topic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    return NextResponse.json(topic, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
