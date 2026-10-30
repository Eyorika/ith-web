import { XataClient } from '../src/xata';

const xata = new XataClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, projectType, budget, description } = body;
    if (!name || !email || !projectType || !budget || !description) {
      return Response.json(
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

    return Response.json({
      message: 'Quote request submitted successfully',
      id: record.id
    });

  } catch (error) {
    console.error('Error processing quote request:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
