"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="block w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="block w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="block w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary resize-none"
        />
      </div>
      <Button type="submit" disabled={status === "sending"} size="lg" className="w-full">
        {status === "sending" ? "Sending…" : "Send Message"}
      </Button>
      {status === "done" && (
        <p className="text-sm font-medium text-green-600 bg-green-50 px-4 py-3 rounded-xl">
          Thanks! We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600 bg-red-50 px-4 py-3 rounded-xl">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
