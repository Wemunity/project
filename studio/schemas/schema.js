// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import introModule from './introModule';
import socialModule from './socialModule';
import featureModule from './featureModule';
import features from './features';
import supporters from './supporters';
import donator from './donator';
import supportModule from './supportModule';
import donationModule from './donationModule';
import footerModule from './footerModule';
import page from './page';
import pressPage from './pressPage';
import support from './supportPage';
import pressTeaser from './pressTeaser';
import buttonLink from './buttonLink';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    introModule,
    socialModule,
    featureModule,
    supportModule,
    donationModule,
    footerModule,
    features,
    supporters,
    donator,
    page,
    pressPage,
    pressTeaser,
    support,
    buttonLink,
  ])
});
