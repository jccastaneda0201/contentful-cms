import { createClient } from 'contentful';

const client = createClient({
  space: '5ka1b57p4jx2',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response.items))
  .catch(console.error);
