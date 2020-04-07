import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: 'nozluz6d',
  dataset: 'production',
  useCdn: true
});

export default client;
