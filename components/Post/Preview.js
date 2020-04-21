import Avatar from './Avatar';
import Date from './Date';
import CoverImage from './CoverImage';
import Link from 'next/link';

export default function PostPreview({ title, coverImage, date, author, slug }) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:text-gray-500">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-2">
        <Date dateString={date} />
      </div>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
