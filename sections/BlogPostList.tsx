import { LoaderReturnType } from "$live/std/types.ts";
import { getBlogPath, PostList } from "$deco/components/utils/Blog.ts";
import Image from "$live/std/ui/components/Image.tsx";

export type Props = {
  postList: LoaderReturnType<string>;
};

export default function MarkdownContainer(props: Props) {
  const postsList = JSON.parse(props.postList) as PostList;
  const highlightPost = postsList.posts[0];
  const normalPosts = postsList.posts.filter((post) =>
    postsList.posts.indexOf(post) != 0
  );

  return (
    <div class="min-h-screen">
      <div class="w-full relative flex justify-center">
        <div
          style={{
            width: "100%",
            height: "75vh",
            background: "#C5FFE9",
            clipPath: "polygon(0 0,100% 0,100% 43%, 0 100%)",
            position: "absolute",
            zIndex: "-1",
            top: 0,
          }}
        />
        <section class="max-w-4xl lg:px-0  px-8 pt-10 sm:pt-20">
          <div class="w-full">
            <a
              href={getBlogPath(highlightPost.path)}
              class="group w-full"
            >
              <div class="text-deco-dark-green mb-10 sm:mb-20">
                <Image
                  src={highlightPost.img}
                  sizes="(max-width: 894px) 100vw, 50vw"
                  width={894}
                  height={502}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  preload
                />
                <div class="mt-6">
                  <h1 class="font-bold text-5xl leading-10 sm:leading-[62px] text-default group-hover:underline">
                    {highlightPost.title}
                  </h1>
                  <div class="text-2xl leading-7 my-3">
                    {highlightPost.descr}
                  </div>
                  <div>
                    <span class="mr-5">{highlightPost.date}</span>
                    <span>{highlightPost.author}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            {normalPosts.map((post) => (
              <a href={getBlogPath(post.path)} class="group mx-auto">
                <div class="w-full text-deco-dark-green mb-10 sm:mb-20">
                  <Image
                    src={post.img}
                    sizes="(max-width: 432px) 100vw, 50vw"
                    width={432}
                    height={344}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    preload
                  />
                  <div class="mt-6">
                    <h1 class="font-bold text-5xl leading-9 text-default group-hover:underline">
                      {post.title}
                    </h1>
                    <div class="text-2xl leading-7 my-3">
                      {post.descr}
                    </div>
                    <div>
                      <span class="mr-5">{post.date}</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
