import { NextResponse } from "next/server";
import revalidate from "../actions";
import { isValidSignature } from "@sanity/webhook";


export async function POST(request: Request) {
  const signature = request.headers.get("sanity-webhook-signature")!
  const body = await request.text();
  if (!(await isValidSignature(body, signature, process.env.SANITY_WEBHOOK_SECRET!))) {
    return NextResponse.json({}, {status: 401})
  }
  const jsonBody = JSON.parse(body)
  const type = jsonBody._type;
  try {
    await revalidate(type)
    return NextResponse.json({},{status: 200})
  } catch (e) {
    return NextResponse.json({}, {status: 500})
  }
}