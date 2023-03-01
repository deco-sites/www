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
    <section class="max-w-4xl w-full p-2 md:p-0 mx-auto">
      <div class="mb-11 mt-16">
        <a class="flex items-center cursor-pointer text-subdued" href="/blog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span class="ml-4 hover:underline">
            Voltar para o blog
          </span>
        </a>
      </div>
      <div class="w-full">
        <h1 class="font-bold text-4xl leading-9">
          {post.title}
        </h1>
        <div class="text-2xl leading-7 my-3 text-secondary-dark">
          {post.descr}
        </div>
        <div class="text-secondary-dark">
          <span class="mr-5">{post.date}</span>
          <span>{post.author}</span>
        </div>
      </div>
    </section>
  );
}
