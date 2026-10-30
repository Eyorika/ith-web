import { NextResponse } from 'next/server';
import { XataClient } from '@/xata';

const xata = new XataClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, projectType, budget, description } = body;
    if (!name || !email || !projectType || !budget || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create record in Xata database
    const record = await xata.db.quotes.create({
      name,
      email,
      company: body.company || null,
      projectType,
      budget,
      description,
      status: 'new',
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({
      message: 'Quote request submitted successfully',
      id: record.id
    });

  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}