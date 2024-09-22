import { NextResponse } from 'next/server';
import axios from 'axios';

const rateLimit = 100; // Number of requests allowed in the time window
const rateLimitWindow = 15 * 60 * 1000; // 15 minutes in milliseconds
const ipRequests = new Map<string, { count: number, resetTime: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  let reqInfo = ipRequests.get(ip);
  if (!reqInfo || now > reqInfo.resetTime) {
    reqInfo = { count: 0, resetTime: now + rateLimitWindow };
  }

  if (reqInfo.count >= rateLimit) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  reqInfo.count++;
  ipRequests.set(ip, reqInfo);

  try {
    const { imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
    }

    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    });

    const headers = new Headers();
    headers.set('Content-Type', 'image/jpeg');
    headers.set('Content-Disposition', 'attachment; filename="download.jpg"');

    return new NextResponse(Buffer.from(response.data, 'binary'), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error('Error downloading image:', error);
    return NextResponse.json({ error: 'Failed to download image' }, { status: 500 });
  }
}
