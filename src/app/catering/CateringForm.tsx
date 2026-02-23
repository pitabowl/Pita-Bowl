"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CateringForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          date: data.get("date"),
          guests: data.get("guests"),
          notes: data.get("notes"),
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
        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="block w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
          Event date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className="block w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
        />
      </div>
      <div>
        <label htmlFor="guests" className="block text-sm font-semibold text-foreground mb-2">
          Approximate number of guests
        </label>
        <input
          id="guests"
          name="guests"
          type="number"
          min={1}
          placeholder="e.g. 25"
          className="block w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
        />
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-semibold text-foreground mb-2">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          placeholder="Dietary needs, delivery address, timing..."
          className="block w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary resize-none"
        />
      </div>
      <Button type="submit" disabled={status === "sending"} size="lg" className="w-full sm:w-auto">
        {status === "sending" ? "Sending…" : "Submit Request"}
      </Button>
      {status === "done" && (
        <p className="text-sm font-medium text-green-600 bg-green-50 px-4 py-3 rounded-lg">
          Thanks! We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600 bg-red-50 px-4 py-3 rounded-lg">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
