export const handler = () => {
  const formUrl = `https://airtable.com/shrpWZHqr4bmuI5OD`;
  return new Response(`Redirecting to ${formUrl}`, {
    status: 301,
    headers: {
      Location: formUrl,
    },
  });
};

export default handler;
