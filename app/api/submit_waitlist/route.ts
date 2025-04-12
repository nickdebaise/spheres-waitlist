import { createClient } from '@supabase/supabase-js';
import { NextResponse } from "next/server";
import { z } from 'zod';

const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  email: z.string().email("Invalid email address")
});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = waitlistSchema.safeParse(body);

    if (!result.success) {
      const errorMessages = result.error.errors.map(err => ({
        path: err.path.join('.'),
        message: err.message
      }));

      return NextResponse.json(
        { success: false, errors: errorMessages },
        { status: 400 }
      );
    }

    const { name, email } = result.data;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ name, email }]);

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { success: false, message: "This email is already on the waitlist" },
          { status: 409 }
        );
      }

      console.error('Supabase error:', error);
      throw new Error("Failed to add email to waitlist");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}