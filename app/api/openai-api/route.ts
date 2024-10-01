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

type HeadlineRequest = {
  currentRole: string;
  keySkills: string;
  industry: string;
  uniqueValue: string;
};

type InstagramBioRequest = {
  name: string;
  occupation: string;
  interests: string;
  personality: string;
  callToAction: string;
};

type InstagramCaptionRequest = {
  topic: string;
  mood: string;
  hashtags: string;
  callToAction: string;
};

type Request = BioRequest | PostRequest | HeadlineRequest | InstagramBioRequest | InstagramCaptionRequest;

export async function POST(request: NextRequest) {
  const body: Request & { tool: string } = await request.json();
  const { tool, ...data } = body;

  let messages;

  switch (tool) {
    case 'linkedinBio':
      messages = createLinkedInBioMessages(data as BioRequest);
      break;
    case 'linkedinPost':
      messages = createLinkedInPostMessages(data as PostRequest);
      break;
    case 'linkedinHeadline':
      messages = createLinkedInHeadlineMessages(data as HeadlineRequest);
      break;
    case 'instagramBio':
      messages = createInstagramBioMessages(data as InstagramBioRequest);
      break;
    case 'instagramCaption':
      messages = createInstagramCaptionMessages(data as InstagramCaptionRequest);
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
        model: "gpt-4-0613",
        messages: messages,
        max_tokens: 250
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    const content = responseData.choices[0].message.content.trim();

    switch (tool) {
      case 'linkedinBio':
      case 'instagramBio':
        return NextResponse.json({ bio: content });
      case 'linkedinPost':
        return NextResponse.json({ post: content });
      case 'linkedinHeadline':
        return NextResponse.json({ headline: content });
      case 'instagramCaption':
        return NextResponse.json({ caption: content });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: `An error occurred while generating the ${tool}.` }, { status: 500 });
  }
}

function createLinkedInBioMessages(data: BioRequest) {
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

function createLinkedInPostMessages(data: PostRequest) {
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

function createLinkedInHeadlineMessages(data: HeadlineRequest) {
  const { currentRole, keySkills, industry, uniqueValue } = data;
  return [
    { role: "system", content: "You are a professional LinkedIn headline writer." },
    { role: "user", content: `Generate a compelling LinkedIn headline. 
      Current role: ${currentRole}. 
      Key skills: ${keySkills}. 
      Industry: ${industry}. 
      Unique value proposition: ${uniqueValue}.
      The headline should be concise, impactful, and highlight the person's professional identity and value.` }
  ];
}

function createInstagramBioMessages(data: InstagramBioRequest) {
  const { name, occupation, interests, personality, callToAction } = data;
  return [
    { role: "system", content: "You are a creative Instagram bio writer." },
    { role: "user", content: `Generate an engaging Instagram bio for ${name}. 
      Occupation: ${occupation}. 
      Interests: ${interests}. 
      Personality: ${personality}. 
      Call to action: ${callToAction}.
      The bio should be concise, creative, and reflect the user's personality while adhering to Instagram's 150 character limit.` }
  ];
}

function createInstagramCaptionMessages(data: InstagramCaptionRequest) {
  const { topic, mood, hashtags, callToAction } = data;
  return [
    { role: "system", content: "You are a creative Instagram caption writer." },
    { role: "user", content: `Generate an engaging Instagram caption about ${topic}. 
      Mood: ${mood}. 
      Hashtags to include: ${hashtags}. 
      Call to action: ${callToAction}.
      The caption should be catchy, relevant to the topic, and encourage engagement. Include emojis where appropriate.` }
  ];
}
