export const handler = () => {
  const deck = "https://www.deco.cx/deck.pdf";
  return new Response(deck, {
    status: 302,
    headers: {
      Location: `${deck}`,
    },
  });
};

export default handler;
