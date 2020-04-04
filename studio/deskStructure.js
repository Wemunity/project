import S from '@sanity/desk-tool/structure-builder';
// All types that should not be shown
const hiddenTypes = [
  'supporters',
  'donator',
  'features',
  'introModule',
  'socialModule',
  'featureModule',
  'supportModule',
  'donationModule',
  'footerModule',
  'press',
  'support',
];
export default () =>
  S.list()
    .title('Modules')
    .items([
      S.listItem()
        .title('Landingpage')
        .child(
          S.list()
            .title('Modules')
            .items([
              S.listItem()
                .title('Intro Module')
                .child(
                  S.documentList()
                    .title('Module Content')
                    .filter('_type == $type')
                    .params({ type: 'introModule' })
                ),
              S.listItem()
                .title('Social Module')
                .child(
                  S.documentList()
                    .title('Module Content')
                    .filter('_type == $type')
                    .params({ type: 'socialModule' })
                ),
              S.listItem()
                .title('Feature Module')
                .child(
                  S.documentList()
                    .title('Module Content')
                    .filter('_type == $type')
                    .params({ type: 'featureModule' })
                ),
              S.listItem()
                .title('Support Module')
                .child(
                  S.documentList()
                    .title('Module Content')
                    .filter('_type == $type')
                    .params({ type: 'supportModule' })
                ),
              S.listItem()
                .title('Donator Module')
                .child(
                  S.documentList()
                    .title('Donator Content')
                    .filter('_type == $type')
                    .params({ type: 'donationModule' })
                ),
              S.listItem()
                .title('Footer Module')
                .child(
                  S.documentList()
                    .title('Module Content')
                    .filter('_type == $type')
                    .params({ type: 'footerModule' })
                )
            ])
        ),
        S.listItem()
            .title("Press Page")
            .child(
                S.editor()
                    .id('press')
                    .schemaType("press")
                    .documentId("press")
            ),
        S.listItem()
            .title("Support & partners page")
            .child(
                S.editor()
                    .id('support')
                    .schemaType("support")
                    .documentId("support")
            ),
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId())
      )
    ]);
