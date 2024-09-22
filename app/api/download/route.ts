import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { imageUrl } = req.body

  if (!imageUrl) {
    return res.status(400).json({ error: 'Image URL is required' })
  }

  try {
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    })

    res.setHeader('Content-Type', 'image/jpeg')
    res.setHeader('Content-Disposition', 'attachment; filename="download.jpg"')
    res.send(Buffer.from(response.data, 'binary'))
  } catch (error) {
    console.error('Error downloading image:', error)
    res.status(500).json({ error: 'Failed to download image' })
  }
}
