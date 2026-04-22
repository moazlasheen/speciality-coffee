import React, { useState } from 'react';
import { blogPosts } from '../data/blog';
import SectionLabel from '../components/SectionLabel';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const categories = ['all', 'brewing', 'origin', 'education', 'recipes'] as const;

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = blogPosts[0];

  return (
    <main className="pt-24 md:pt-28 pb-18 md:pb-30">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <SectionLabel label="The Journal" className="mb-4" />
          <h1 className="font-serif text-h1 text-midnight-500 mb-4">Stories, guides & education</h1>
          <p className="text-body font-sans text-midnight-200 max-w-lg">
            Brewing techniques, origin stories, and everything we've learned about making great coffee.
          </p>
        </div>

        {/* Featured Post */}
        <RevealSection>
          <article
            className="grid md:grid-cols-2 gap-0 bg-cream-100 border border-cream-400 rounded-sm overflow-hidden mb-14 cursor-pointer group"
          >
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-caption uppercase tracking-[0.15em] text-teal-300 font-sans font-medium">
                  {featured.category}
                </span>
                <span className="text-caption text-midnight-200 font-sans">{featured.readTime}</span>
              </div>
              <h2 className="font-serif text-h2 text-midnight-500 mb-4 group-hover:text-terra-300 transition-colors">
                {featured.title}
              </h2>
              <p className="text-body font-sans text-midnight-200 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-body-sm font-sans font-medium text-midnight-500">{featured.author}</span>
                <span className="text-caption text-midnight-200 font-sans">{featured.date}</span>
              </div>
            </div>
          </article>
        </RevealSection>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[11px] font-sans font-medium uppercase tracking-[0.1em] rounded-sm border transition-colors ${
                activeCategory === cat
                  ? 'bg-midnight-500 text-cream-100 border-midnight-500'
                  : 'border-cream-400 text-midnight-400 hover:border-midnight-200'
              }`}
            >
              {cat === 'all' ? 'All Posts' : cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, i) => (
            <RevealSection key={post.id} delay={i * 80}>
              <article className="group cursor-pointer">
                <div className="aspect-[3/2] overflow-hidden rounded-sm mb-5 bg-cream-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-caption uppercase tracking-[0.15em] text-teal-300 font-sans font-medium">
                    {post.category}
                  </span>
                  <span className="text-caption text-midnight-200 font-sans">{post.readTime}</span>
                </div>
                <h3 className="font-serif text-h4 text-midnight-500 mb-2 group-hover:text-terra-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-sm font-sans text-midnight-200 line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-caption font-sans font-medium text-midnight-400">{post.author}</span>
                  <span className="text-caption text-midnight-200 font-sans">{post.date}</span>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </main>
  );
}
