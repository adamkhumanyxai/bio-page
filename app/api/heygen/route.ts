import { NextResponse } from 'next/server';

export async function POST() {
  const apiKey = process.env.HEYGEN_API_KEY;
  const agentId = process.env.HEYGEN_AGENT_ID;

  if (!apiKey || apiKey === 'your_heygen_api_key_here') {
    return NextResponse.json(
      { error: 'HeyGen API key not configured' },
      { status: 503 }
    );
  }

  if (!agentId || agentId === 'your_heygen_agent_id_here') {
    return NextResponse.json(
      { error: 'HeyGen Agent ID not configured' },
      { status: 503 }
    );
  }

  const response = await fetch(
    'https://api.heygen.com/v1/streaming.create_token',
    {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    const text = await response.text();
    return NextResponse.json(
      { error: `HeyGen error: ${response.status}`, detail: text },
      { status: 502 }
    );
  }

  const data = await response.json();
  return NextResponse.json({ token: data.data?.token, agentId });
}
