import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: 'nozluz6d',
  dataset: 'production',
  useCdn: true,
  token:
    'skKZs1WEJbLj62uWng9yQj3LTTGVS6hEdgPqB1V3GZ68wuVbVjCEEStaupLUA3L4pTs5DM9cuY19OQTq8uhweBd4boAyC9y6aAytIL2CR5llRHXUGbGI2h0RJ72TQEOXrRWi7XoRaDGE81qtqH62EKrKtDYB8z01hq1MGw13MIK9v6sdRIzh'
});

export default client;
