// /app/api/download_file/route.ts

import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'Chandan_Achary_Resume.pdf');

  try {
    const fileExists = fs.existsSync(filePath);

    if (!fileExists) {
      return new Response(
        JSON.stringify({ success: false, message: 'File not found.' }),
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Chandan_Achary_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error downloading file:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to download file.' }),
      { status: 500 }
    );
  }
}