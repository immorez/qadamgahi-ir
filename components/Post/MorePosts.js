import PostPreview from '../Post/Preview';

export default function MorePosts({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:col-gap-4 md:row-gap-2 mb-32 px-4">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
