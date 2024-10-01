import { NextRequest, NextResponse } from 'next/server';

type BioRequest = {
  name: string;
  currentRole: string;
  experience: string;
  skills: string;
  goals: string;
};

export async function POST(request: NextRequest) {
  const body: BioRequest = await request.json();
  const { name, currentRole, experience, skills, goals } = body;

  const messages = [
    { role: "system", content: "You are a professional LinkedIn bio writer." },
    { role: "user", content: `Generate a professional LinkedIn bio for ${name}. 
      Current role: ${currentRole}. 
      Experience: ${experience}. 
      Skills: ${skills}. 
      Career goals: ${goals}.
      The bio should be concise, engaging, and highlight the person's unique value proposition.` }
  ];

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 250
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ bio: data.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: "An error occurred while generating the bio." }, { status: 500 });
  }
}
