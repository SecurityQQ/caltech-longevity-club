"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getGalleryImages } from "@/data/gallery";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { Newspaper } from "lucide-react";

const galleryImages = getGalleryImages();

const pressFeatures = [
  {
    id: "california-tech-shlain",
    title: "Innovating Through Irritation with Dr. Jordan Shlain",
    publication: "The California Tech",
    date: "February 24, 2026",
    description:
      "Full-page feature in Caltech's student newspaper covering Dr. Jordan Shlain's speaker event on preventive medicine, trust-based healthcare, and the intersection of AI and longevity.",
    image: "/gallery/california-tech-newspaper.svg",
  },
];

export default function MediaPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <section className="flex-1 w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Heading */}
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl header-text-glow">
              Media
            </h1>
            <p className="max-w-[600px] text-muted-foreground">
              Press coverage, event photography, and moments from our community
            </p>
          </motion.div>

          {/* ── Press / Featured In ─────────────────────────────── */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Newspaper className="w-6 h-6 text-orange-400" />
              <h2 className="text-2xl md:text-3xl font-bold">Featured In</h2>
            </div>

            <div className="space-y-6">
              {pressFeatures.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto relative bg-zinc-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <p className="text-sm font-semibold tracking-widest uppercase text-orange-400 mb-2">
                        {item.publication}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.date}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Photo Gallery ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Photo Gallery
            </h2>

            {galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((img, index) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-zinc-900"
                    onClick={() => setLightboxIndex(index)}
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Caption overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="p-4 text-sm text-white leading-snug">
                        {img.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-12">
                Gallery images coming soon.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={galleryImages.map((img) => ({
            src: img.src,
            caption: img.caption,
          }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />
      )}
    </main>
  );
}
