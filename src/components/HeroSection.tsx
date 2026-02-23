"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MENU_URL } from "@/config/links";
import { OrderButton } from "@/components/OrderButton";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-accent/20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS02IDB2Mmgxdi0yaC0xem0yIDJ2Mmgxdi0yaC0xem0tMiAydjJoMXYtMmgtMXptMiAwdjJoMXYtMmgtMXptLTItMnYyaDF2LTJoLTF6bTItMnYyaDF2LTJoLTF6bTAtMnYyaDJ2LTJoLTJ6bS02LTJ2Mmgxdi0yaC0xem0yIDJ2Mmgxdi0yaC0xem0tMiAydjJoMXYtMmgtMXptMiAwdjJoMXYtMmgtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Seed Oil Free · Fresh Daily · Built Your Way
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Pita Bowl is a health- and wellness-forward restaurant in San Diego focused on clean,
              flavorful shawarma, customizable meals — made with fresh, daily-prepped ingredients
              and absolutely no seed oils.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <OrderButton location="hero" size="xl" />
              <Button variant="outline" size="xl" asChild>
                <Link href={MENU_URL}>View Menu</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted shadow-2xl"
          >
            <Image
              src="/images/hero-pita-bowl.jpg"
              alt="Signature chicken pita bowl — Mediterranean rice, greens, hummus, and grilled chicken"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
