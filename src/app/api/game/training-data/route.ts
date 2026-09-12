import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cachedTrainingData: any[] | null = null;
let cacheTime = 0;

export async function GET(request: NextRequest) {
  try {
    if (!cachedTrainingData || Date.now() - cacheTime > 60000) {
      cachedTrainingData = await prisma.trainingEvent.findMany({
        orderBy: { eventId: 'asc' }
      });
      cacheTime = Date.now();
    }

    return NextResponse.json({
      success: true,
      data: cachedTrainingData,
    });
  } catch (error) {
    console.error('Training data error:', error);
    return NextResponse.json({ error: 'Failed to fetch training data' }, { status: 500 });
  }
}
