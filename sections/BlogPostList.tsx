import { LoaderReturnType } from "$live/std/types.ts";
import { getBlogPath, PostList } from "$deco/components/utils/Blog.ts";
import Image from "$live/std/ui/components/Image.tsx";
import Button from "../components/ui/Button.tsx";
import ChangeCategory from "../islands/ChangeCategory.tsx";


export type CategoryProps = {
  category: string;
}
export type Props = {
  postList: LoaderReturnType<string>;
  categories: CategoryProps[];
};

export default function MarkdownContainer(props: Props) {
  const postsList = JSON.parse(props.postList) as PostList;
  const highlightPost = postsList.posts[0];
  const normalPosts = postsList.posts.filter((post) =>
    postsList.posts.indexOf(post) != 0
  );

  return (
    <div class="min-h-screen flex justify-center">
      <div class="relative flex justify-center mx-auto">
        <section class="max-w-4xl lg:px-0 px-8 pt-10 sm:pt-20">
          <div class="flex flex-row items-start mb-6 flex-wrap">
            {props.categories && props.categories.map((cat, index) => (
                <div class="text-center mr-4 box-border">
                  <ChangeCategory category={cat.category}/>
                </div>
              ))}
            
          </div>
          <div class="w-full box-border">
            <a
              href={getBlogPath(highlightPost.path)}
              class="group w-full"
            >
              <div class="mb-10 sm:mb-20">
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
                <button class="bg-black font-inter rounded-full text-white px-3 border-none mt-6 uppercase text-[14px]">Category</button>
                <div class="mt-4">
                  <h1 class="text-5xl leading-[1.18] group-hover:text-black-hover">
                    {highlightPost.title}
                  </h1>
                  <div class="text-subdued text-3xl leading-[1.5] my-3">
                    {highlightPost.descr}
                  </div>
                  <div>
                    <span class="mr-5 text-subdued">{highlightPost.date}</span>
                    <span class="text-subdued">Written by {highlightPost.author}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            {normalPosts.map((post) => (
              <a href={getBlogPath(post.path)} class="group mx-auto">
                {/* removi text-deco-dark-green */}
                <div class="w-full mb-10 sm:mb-20">
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
                  <button class="bg-black rounded-full text-white px-3 border-none mt-4 text-thin uppercase font-inter text-[14px]">Category</button>
                  <div class="mt-4">
                    <h1 class="text-3xl leading-9 group-hover:text-black-hover">
                      {post.title}
                    </h1>
                    <div class="leading-7 text-subdued text-2xl my-3">
                      <h2>
                        {post.descr}
                      </h2>
                    </div>
                    <div>
                      <span class="mr-5 text-subdued text-[18px]">{post.date}</span>
                      <span class="text-subdued text-[18px] ">Written by {post.author}</span>
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
