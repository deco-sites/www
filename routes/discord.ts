export const handler = () => {
  const discord = `https://discord.gg/9fkbcvR833`;
  return new Response(`Welcome to deco.cx! Join our discord: ${discord}`, {
    status: 302,
    headers: {
      Location: `${discord}`,
    },
  });
};

export default handler;
