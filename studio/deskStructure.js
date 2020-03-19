import S from '@sanity/desk-tool/structure-builder';
// All types that should not be shown
const hiddenTypes = [
  'supporters',
  'features',
  'introModule',
  'socialModule',
  'featureModule',
  'supportModule',
  'footerModule'
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
                .title('Footer Module')
                .child(
                  S.documentList()
                    .title('Module Content')
                    .filter('_type == $type')
                    .params({ type: 'footerModule' })
                )
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem => !hiddenTypes.includes(listItem.getId())
      )
    ]);
