import Container from '../components/Container/Container';
import MorePosts from '../components/Post/MorePosts';
import HeroPost from '../components/Post/HeroPost';
import Intro from '../components/Intro/Intro';
import Layout from '../components/UI/Layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Navigation from '../components/UI/Navigation/Navigation';
import Interests from '../components/Intro/Interests';
import Skills from '../components/Intro/Skills';
export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Mohammadreza Qadamgahi Personal Blog</title>
        </Head>
        <Container>
          <Navigation />
          <div>
            <Intro />
            <Interests />
            <Skills />
          </div>
          <section className="py-2">
            <h2 className="h2 text-gray-900 font-bold font-mono text-5xl text-center">
              MY BLOG
            </h2>
            <p className="-mt-1 font-thin text-center">
              ⌨️ Sometimes I write here for fun. ✍🏽
            </p>
            {!(heroPost && morePosts) && (
              <p className="text-center text-gray-500">NO POST YET!</p>
            )}
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div className="block">
                {heroPost ? (
                  <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                  />
                ) : null}
              </div>
              {morePosts.length > 0 ? <MorePosts posts={morePosts} /> : null}
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
