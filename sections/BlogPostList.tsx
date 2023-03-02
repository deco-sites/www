import { LoaderReturnType } from "$live/types.ts";
import { getBlogPath, PostList } from "$deco/components/utils/Blog.ts";

export type Props = {
  postList: LoaderReturnType<string>;
};

export default function MarkdownContainer(props: Props) {
  const postsList = JSON.parse(props.postList) as PostList;
  return (
    <section class="max-w-[894px] w-full p-2 md:p-0 mx-auto my-10">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {postsList["posts"].map((post) => (
          <a href={getBlogPath(post.path)}>
            <div class="w-full text-gray-800">
              <img src={post.img} class="w-full mb-5" />
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
          </a>
        ))}
      </div>
    </section>
  );
}
