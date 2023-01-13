import { LoaderReturnType } from "$live/std/types.ts";
import { getBlogPath, PostList } from "$deco/components/utils/Blog.ts";

export type Props = {
  postList: LoaderReturnType<string>;
  page: LoaderReturnType<{ url: string }>;
};

export default function BlogPostHeader(props: Props) {
  const url = props.page.url;
  const postsList = JSON.parse(props.postList) as PostList;
  const post = postsList.posts.filter((x) => getBlogPath(x.path) === url)[0];
  if (!post) {
    return <div>Post not found.</div>;
  }
  return (
    <section class="max-w-[894px] w-full p-2 md:p-0 mx-auto my-10">
      <div class="w-full text-gray-800">
        <h1 class="font-bold text-[36px] leading-9">
          {post.title}
        </h1>
        <div class="text-[24px] leading-7 my-3">
          {post.descr}
        </div>
        <div class="text-[16px] text-gray-500">
          <span class="mr-5">{post.date}</span>
          <span>{post.author}</span>
        </div>
      </div>
    </section>
  );
}
