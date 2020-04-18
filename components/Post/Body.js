import markdownStyles from './markdown.module.css';
import Tags from './Tags';
export default function PostBody({ content, tags }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Tags tags={tags} />
    </div>
  );
}
