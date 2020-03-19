import imageUrlBuilder from '@sanity/image-url';
import client from '../lib/sanity';

const builder = imageUrlBuilder(client);

const imageUrlFor = source => builder.image(source);
export default imageUrlFor;
