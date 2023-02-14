export const handler = () => {
  const blog = `https://www.deco.cx/blog`;
  return new Response(`Redirecting to ${blog}`, {
    status: 301,
    headers: {
      Location: blog,
    },
  });
};

export default handler;
