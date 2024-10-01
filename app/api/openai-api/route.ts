import { NextRequest, NextResponse } from 'next/server';

type BioRequest = {
  name: string;
  currentRole: string;
  experience: string;
  skills: string;
  goals: string;
};

type PostRequest = {
  topic: string;
  keyPoints: string;
  tone: string;
  callToAction: string;
};

type Request = BioRequest | PostRequest;

export async function POST(request: NextRequest) {
  const body: Request & { tool: string } = await request.json();
  const { tool, ...data } = body;

  let messages;

  switch (tool) {
    case 'linkedinBio':
      messages = createBioMessages(data as BioRequest);
      break;
    case 'linkedinPost':
      messages = createPostMessages(data as PostRequest);
      break;
    default:
      return NextResponse.json({ error: "Invalid tool specified" }, { status: 400 });
  }

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

    const responseData = await response.json();
    const content = responseData.choices[0].message.content.trim();

    return NextResponse.json(tool === 'linkedinBio' ? { bio: content } : { post: content });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: `An error occurred while generating the ${tool === 'linkedinBio' ? 'bio' : 'post'}.` }, { status: 500 });
  }
}

function createBioMessages(data: BioRequest) {
  const { name, currentRole, experience, skills, goals } = data;
  return [
    { role: "system", content: "You are a professional LinkedIn bio writer." },
    { role: "user", content: `Generate a professional LinkedIn bio for ${name}. 
      Current role: ${currentRole}. 
      Experience: ${experience}. 
      Skills: ${skills}. 
      Career goals: ${goals}.
      The bio should be concise, engaging, and highlight the person's unique value proposition.` }
  ];
}

function createPostMessages(data: PostRequest) {
  const { topic, keyPoints, tone, callToAction } = data;
  return [
    { role: "system", content: "You are a professional LinkedIn content creator." },
    { role: "user", content: `Generate a compelling LinkedIn post about ${topic}. 
      Key points to include: ${keyPoints}. 
      Desired tone: ${tone}. 
      Call to action: ${callToAction}.
      The post should be engaging, informative, and encourage interaction from the audience.` }
  ];
}
