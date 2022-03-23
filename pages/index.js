import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import BlogPostCard from '@/components/BlogPostCard';
import { FeaturedPosts as posts } from '@/data/featuredPosts';

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div>
            <h3 className="font-bold text-2xl mt-4 md:text-3xl tracking-tight text-black dark:text-white">
              Welcome to W3
            </h3>
            <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                Where culture meets crypto. Reach us anytime <Link href="mailto:chris@tw3.us">here</Link> anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
