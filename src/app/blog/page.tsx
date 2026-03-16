import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowLeft, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog — Quiet Scale",
  description: "Notes on building systems that scale. ML, NLP, and the work behind the work.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            iam.quietscale.ai
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
          Blog
        </h1>
        <p className="mb-12 text-muted">
          Notes on building systems that scale. ML, NLP, and the work behind the work.
        </p>

        {posts.length === 0 ? (
          <p className="text-sm text-muted">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/30 hover:bg-surface-hover sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{post.description}</p>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted sm:mt-0 sm:flex-shrink-0 sm:ml-6">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
