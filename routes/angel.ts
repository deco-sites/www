export const handler = () => {
  const angel = `https://forms.gle/i9iK6orcN1YEX69E6`;
  return new Response(`Redirecting to: ${angel}`, {
    status: 302,
    headers: {
      Location: `${angel}`,
    },
  });
};

export default handler;
