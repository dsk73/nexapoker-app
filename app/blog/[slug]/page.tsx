import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Link from "next/link";
import { notFound } from "next/navigation";

import { CalendarDays, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

import { blogPosts } from "@/data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((blog) => blog.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Nexa Poker Blog`,
    description: post.description,

    alternates: {
      canonical: `https://nexa40.com/blog/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://nexa40.com/blog/${post.slug}`,
      type: "article",
      siteName: "Nexa Poker",
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((blog) => blog.slug === slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.trim().split("\n\n").filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-50">
      {" "}
      <Navbar />
      ```
      {/* ARTICLE HEADER */}
      <section className="px-6 pt-32 pb-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-medium text-pink-600 transition-all duration-300 hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-xl shadow-slate-100">
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10 p-8 md:p-14">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
                  <BookOpen className="h-4 w-4" />
                  Poker Strategy Article
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </div>
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
                {post.title}
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ARTICLE CONTENT */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <article className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-100 md:p-14">
            <div className="max-w-none">
              {paragraphs.map((paragraph, index) => {
                const trimmed = paragraph.trim();

                if (trimmed.startsWith("- ") || trimmed.includes("\n- ")) {
                  const items = trimmed
                    .split("\n")
                    .filter((line) => line.trim().startsWith("- "))
                    .map((line) => line.replace("- ", "").trim());

                  return (
                    <ul
                      key={index}
                      className="my-8 list-disc space-y-4 pl-8 text-xl leading-9 text-slate-700"
                    >
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p
                    key={index}
                    className="mb-8 text-xl leading-10 text-slate-700"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>

          {/* CONTINUE READING */}
          <section className="mt-20">
            <h2 className="mb-10 text-center text-4xl font-black text-slate-900">
              Continue Reading
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/online-poker"
                className="rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl"
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Online Poker Guide
                </h3>

                <p className="leading-8 text-slate-600">
                  Learn about tournaments, cash games, rewards, and online poker
                  fundamentals.
                </p>
              </Link>

              <Link
                href="/download"
                className="rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl"
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Download Poker App
                </h3>

                <p className="leading-8 text-slate-600">
                  Download Nexa Poker for Android, iPhone, Windows, and Mac.
                </p>
              </Link>

              <Link
                href="/nexa40"
                className="rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl"
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Nexa40
                </h3>

                <p className="leading-8 text-slate-600">
                  Explore the Nexa40 poker platform and player ecosystem.
                </p>
              </Link>

              <Link
                href="/wpt-global-alternative"
                className="rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl"
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  WPT Global Alternative
                </h3>

                <p className="leading-8 text-slate-600">
                  Compare Nexa Poker with popular online poker alternatives.
                </p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-24">
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#070012]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-pink-600/20 blur-[180px]" />
                <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-purple-600/20 blur-[180px]" />
              </div>

              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "80px 80px",
                }}
              />

              <div className="relative z-10 px-8 py-20 text-center md:px-16 md:py-24">
                <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-300">
                  ♠ Ready To Play?
                </div>

                <h2
                  className="mb-6 text-4xl font-black md:text-6xl"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Start Playing Online Poker Today
                </h2>

                <p
                  className="mx-auto mb-10 max-w-3xl text-lg leading-8 md:text-xl"
                  style={{
                    color: "#d8d8e6",
                  }}
                >
                  Download Nexa Poker and enjoy tournaments, cash games, weekly
                  rakeback rewards, and a premium online poker experience.
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center rounded-2xl bg-pink-600 px-8 py-4 font-semibold shadow-xl shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    Download App
                  </Link>

                  <Link
                    href="/online-poker"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:bg-white/10"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    Explore Online Poker
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
