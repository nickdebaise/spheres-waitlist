"use client";

import { toast } from "sonner";
import { useState } from "react";
import CTA from "@/components/cta";
import Form from "@/components/form";
import Particles from "@/components/ui/particles";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill in all fields 😠");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // Submit to Supabase waitlist
        const response = await fetch("/api/submit_waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        // Parse the response json
        const data = await response.json();

        if (!response.ok) {
          if (response.status === 429) {
            reject("Rate limited");
          } else if (response.status === 400) {
            // Handle validation errors
            const errorMessage = data.errors?.map((err: any) =>
              `${err.message}`
            ).join(', ');
            reject(errorMessage || "Invalid submission data");
          } else if (response.status === 409) {
            // Handle duplicate email
            reject(data.message || "Email already registered");
          } else {
            reject(data.message || "Waitlist submission failed");
          }
        } else {
          resolve({ name });
        }
      } catch (error) {
        reject("An error occurred during submission");
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        return "Thank you for joining the waitlist 🎉";
      },
      error: (error) => {
        return error || "An error occurred. Please try again 😢.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 backdrop-filter: blur(8px) bg-white/30 p-4 backdrop-blur-sm sm:p-8">
        <CTA />

        <Form
          name={name}
          email={email}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />

      </section>

      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        refresh
      />
    </main>
  );
}