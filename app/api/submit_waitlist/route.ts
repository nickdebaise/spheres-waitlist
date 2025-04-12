import { createClient } from '@supabase/supabase-js';
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: Request) {
  const body = await request.json();

  try {
    // Create Supabase client with the service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if(!body.name || !body.email) {
      throw new Error("Failed to add email to waitlist")
    }

    // Insert the new waitlist entry
    const { data, error } = await supabase
      .from('waitlist')  // Your table name
      .insert([
        {
          name: body?.name,
          email: body?.email
        }
      ]);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error("Failed to add email to waitlist");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}