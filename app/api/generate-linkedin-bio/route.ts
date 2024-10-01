import { NextRequest, NextResponse } from 'next/server';

type BioRequest = {
  name: string;
  currentRole: string;
  experience: string;
  skills: string;
  goals: string;
};

type CoverLetterRequest = {
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  companyName: string;
  jobTitle: string;
  keySkills: string;
  relevantExperience: string;
  whyInterested: string;
  tone: string;
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  let messages;
  let responseKey;

  if ('name' in body) {
    // LinkedIn Bio Generation
    const { name, currentRole, experience, skills, goals } = body as BioRequest;
    messages = [
      { role: "system", content: "You are a professional LinkedIn bio writer." },
      { role: "user", content: `Generate a professional LinkedIn bio for ${name}. 
        Current role: ${currentRole}. 
        Experience: ${experience}. 
        Skills: ${skills}. 
        Career goals: ${goals}.
        The bio should be concise, engaging, and highlight the person's unique value proposition.` }
    ];
    responseKey = 'bio';
  } else {
    // Cover Letter Generation
    const { fullName, currentRole, companyName, jobTitle, keySkills, relevantExperience, whyInterested, tone } = body as CoverLetterRequest;
    messages = [
      { role: "system", content: "You are a professional cover letter writer." },
      { role: "user", content: `Generate a ${tone} cover letter for ${fullName} applying for the position of ${jobTitle} at ${companyName}. 
        Current role: ${currentRole}
        Key skills: ${keySkills}
        Relevant experience: ${relevantExperience}
        Why interested: ${whyInterested}

        The cover letter should be well-structured, engaging, and highlight the applicant's qualifications and enthusiasm for the role. 
        Include the following sections:
        1. Professional greeting
        2. Opening paragraph introducing the applicant and stating the position they're applying for
        3. Body paragraphs highlighting relevant skills and experience
        4. Closing paragraph expressing interest and thanking the reader
        5. Professional sign-off

        Do not include the applicant's contact information in the letter body.` }
    ];
    responseKey = 'coverLetter';
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: messages,
        max_tokens: responseKey === 'bio' ? 250 : 500
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ [responseKey]: data.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: `An error occurred while generating the ${responseKey}.` }, { status: 500 });
  }
}
