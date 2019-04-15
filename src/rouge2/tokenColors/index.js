const theme = require('../theme')
module.exports = [
  {
    settings: {
      foreground: '#f3f',
    },
  },
  {
    name: 'Comment',
    scope: [
      'comment',
      'punctuation.definition.comment',
      'unused.comment',
      'wildcard.comment',
    ],
    settings: {
      fontStyle: 'italic',
      // foreground: '#64727d',
      foreground: theme.bg_light,
    },
  },
  {
    name: 'Constant',
    scope: 'constant',
    settings: {
      foreground: theme.peach_light,
    },
  },
  {
    name: 'Entity',
    scope: 'entity',
    settings: {
      foreground: theme.rouge_light,
    },
  },
  {
    name: 'HTML Entity Attributes',
    scope: 'entity.other.attribute-name.html',
    settings: {
      foreground: theme.grapple,
      fontStyle: 'italic'
    },
  },
  {
    name: 'HTML Entity',
    scope: 'entity.name.tag.html',
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: 'Invalid',
    scope: 'invalid',
    settings: {
      // foreground: '#bbb',
      // foreground: '#e41',
    },
  },
  {
    name: 'Keyword',
    scope: 'keyword',
    settings: {
      foreground: theme.purple_light,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Operators',
    scope: 'keyword.operator',
    settings: {
      foreground: theme.bg_lighter,
      // foreground: theme.green_light,
      fontStyle: 'regular',
    },
  },
  {
    name: '`New` Operator',
    scope: 'keyword.operator.new',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: '`This` Variable',
    scope: 'variable.language.this',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Meta',
    scope: 'meta',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: 'Object Keys',
    scope: 'meta.object-literal.key',
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  {
    name: 'Meta',
    scope: 'meta.function.expression',
    settings: {
      foreground: theme.purple,
    },
  },
  {
    name: 'Variable',
    scope: 'variable',
    settings: {
      foreground: theme.rouge,
    },
  },
  {
    name: 'Support',
    scope: 'support',
    settings: {
      foreground: theme.grapple,
    },
  },
  {
    name: 'Support Functions',
    scope: 'support.function',
    settings: {
      foreground: theme.peach_light,
    },
  },
  {
    name: 'Punctuation',
    scope: 'punctuation',
    settings: {
      foreground: theme.purple,
    },
  },
  {
    name: 'Punctuation - Definitions (curly brackets)',
    scope: 'punctuation.definition',
    settings: {
      foreground: theme.purple_light,
    },
  },
  {
    name: 'Punctuation - Accessors',
    scope: 'punctuation.accessor',
    settings: {
      foreground: theme.green_light,
    },
  },
  {
    name: 'Punctuation - Terminators',
    scope: 'punctuation.terminator',
    settings: {
      foreground: theme.green_light,
    },
  },
  {
    name: 'Punctuation - Separator',
    scope: 'punctuation.separator',
    settings: {
      foreground: theme.green_light,
    },
  },
  {
    name: '[SHELL] Source',
    scope: 'source.shell',
    settings: {
      foreground: theme.bg_lighter,
    },
  },
  // {
  //   name: 'Punctuation Template Expression',
  //   scope: [
  //     'punctuation.definition.template-expression',
  //     'punctuation.definition.template-expression.begin.js',
  //     'punctuation.definition.template-expression.begin.ts',
  //     'punctuation.definition.template-expression.end.ts',
  //     'punctuation.definition.template-expression.end.js',
  //   ],
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  {
    name: 'Storage',
    scope: 'storage',
    settings: {
      foreground: theme.purple_light,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Storage Type Function',
    scope: 'storage.type.function.arrow',
    settings: {
      foreground: theme.purple_light,
      fontStyle: 'regular',
    },
  },
  {
    name: 'String',
    scope: ['string', 'punctuation.definition.string'],
    settings: {
      foreground: theme.green,
    },
  },
  {
    name: 'Params',
    scope: ['variable.parameter', 'meta.parameter'],
    settings: {
      foreground: theme.berry_light,
    },
  },
  // {
  //   name: 'Support',
  //   scope: 'support',
  //   settings: {
  //     foreground: '#F7E3AF',
  //   },
  // },
  // {
  //   name: 'Support Variable Property',
  //   scope: 'support.variable.property',
  //   settings: {
  //     foreground: '#DB6E8F',
  //   },
  // },
  // {
  //   name: 'Support Function',
  //   scope: ['support.function', 'entity.name.function'],
  //   settings: {
  //     foreground: '#F9B5AC',
  //   },
  // },
  // {
  //   name: 'Variable',
  //   scope: 'variable',
  //   settings: {
  //     foreground: '#C6878F',
  //   },
  // },
  // {
  //   name: 'Variable Property',
  //   scope: ['variable.other.property', 'variable.other.object.property'],
  //   settings: {
  //     foreground: '#DB6E8F',
  //   },
  // },
  // {
  //   name: 'Variable Parameter Names',
  //   scope: ['variable.parameter'],
  //   settings: {
  //     foreground: '#DB6E8F',
  //   },
  // },
  // {
  //   name: '[GLOBAL] - Quotation Marks',
  //   scope:
  //     'punctuation.definition.string.begin, punctuation.definition.string.end',
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[GLOBAL] - Comment Block w/ Code',
  //   scope: [
  //     'comment.block.documentation storage',
  //     'comment.block.documentation variable',
  //     'comment.block.documentation punctuation',
  //     'comment.block.documentation meta',
  //   ],
  //   settings: {
  //     foreground: '#64727d',
  //   },
  // },
  // {
  //   name: '[GLOBAL] - Object Literal Keys',
  //   scope: ['meta.object-literal.key entity', 'meta.object-literal.key'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[CSS] - Entity',
  //   scope: ['source.css entity', 'source.stylus entity'],
  //   settings: {
  //     foreground: '#eabe9a',
  //   },
  // },
  // {
  //   name: '[CSS] - ID Selector',
  //   scope: [
  //     'entity.other.attribute-name.id.css',
  //     'entity.other.attribute-name.id.css punctuation.definition.entity.css',
  //   ],
  //   settings: {
  //     foreground: '#eabe9a',
  //   },
  // },
  // {
  //   name: '[CSS] - Class Selector',
  //   scope: [
  //     'entity.other.attribute-name.class.css',
  //     'entity.other.attribute-name.class.css punctuation.definition.entity.css',
  //   ],
  //   settings: {
  //     foreground: '#eabe9a',
  //   },
  // },
  // {
  //   name: '[CSS] - Pseudo-Class Selector',
  //   scope: [
  //     'entity.other.attribute-name.pseudo-class.css',
  //     'entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css',
  //   ],
  //   settings: {
  //     foreground: '#eabe9a',
  //   },
  // },
  // {
  //   name: '[CSS] - Element Selector',
  //   scope: ['entity.name.tag'],
  //   settings: {
  //     foreground: '#DB6E8F',
  //   },
  // },
  // {
  //   name: '[CSS] - Support',
  //   scope: ['source.css support', 'source.stylus support'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[CSS] - Media Constant',
  //   scope: [
  //     'source.css support.constant.media',
  //     'source.stylus support.constant.media',
  //   ],
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[CSS] - Symbols (colons, etc)',
  //   scope: [
  //     'entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css',
  //     'entity.other.attribute-name.id.css punctuation.definition.entity.css',
  //     'entity.other.attribute-name.class.css punctuation.definition.entity.css',
  //   ],
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[CSS] - Constant (property values included)',
  //   scope: [
  //     'source.css constant',
  //     'source.css support.constant',
  //     'source.stylus constant',
  //     'source.stylus support.constant',
  //   ],
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[CSS] - Numeric Constants',
  //   scope: ['source.css constant.numeric', 'source.stylus constant.numeric'],
  //   settings: {
  //     foreground: '#F9B5AC',
  //   },
  // },
  // {
  //   name: '[CSS] - Units (px, em)',
  //   scope: [
  //     'source.css keyword.other.unit',
  //     'source.stylus keyword.other.unit',
  //   ],
  //   settings: {
  //     foreground: '#A3B09A',
  //     fontStyle: 'regular',
  //   },
  // },
  // {
  //   name: '[CSS] - String',
  //   scope: [
  //     'source.css string',
  //     'source.css punctuation.definition.string',
  //     'source.stylus string',
  //     'source.stylus punctuation.definition.string',
  //   ],
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[CSS] - Keyword Punctuation',
  //   scope: ['punctuation.definition.keyword'],
  //   settings: {
  //     foreground: '#b18bb1',
  //   },
  // },
  // {
  //   name: '[CSS] - Property Values',
  //   scope: ['meta.property-value.css', 'source.stylus meta.property-value'],
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[CSS] - Variable',
  //   scope: ['source.css variable', 'source.stylus variable'],
  //   settings: {
  //     foreground: '#C6878F',
  //   },
  // },
  // {
  //   name: '[CSS] - URLs',
  //   scope: [
  //     'source.css variable.parameter.url',
  //     'source.stylus variable.parameter.url',
  //   ],
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[CSS/SCSS] - Property List Keys',
  //   scope: ['meta.property-list.scss', 'meta.property-list.css'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[SCSS/LESS] - Property Values',
  //   scope: ['meta.property-value.scss', 'meta.property-value.less'],
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[SCSS] - Punctuation',
  //   scope: [
  //     'source.css meta.at-rule.keyframes',
  //     'source.css meta.at-rule.mixin',
  //     'source.css meta.property-list',
  //   ],
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[SCSS] - Punctuation',
  //   scope: ['meta.at-rule.each.scss'],
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[HTML] - Entity Name and doctype',
  //   scope: ['text.html.basic entity.name', 'text.html.basic meta.tag.sgml'],
  //   settings: {
  //     foreground: '#DB6E8F',
  //   },
  // },
  // {
  //   name: '[HTML] - ID value',
  //   scope: 'meta.toc-list.id.html',
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[HTML] - Entity Other',
  //   scope: 'text.html.basic entity.other',
  //   settings: {
  //     fontStyle: 'italic',
  //     foreground: '#F7E3AF',
  //   },
  // },
  // {
  //   name: '[HTML] - Brackets for tags: < and >',
  //   scope: [
  //     'punctuation.definition.tag.html',
  //     'punctuation.definition.tag.begin.html',
  //     'punctuation.definition.tag.end.html',
  //     'meta.scope.between-tag-pair.html',
  //   ],
  //   settings: {
  //     foreground: '#808080',
  //   },
  // },
  // {
  //   name: '[HTML] - Equals sign',
  //   scope: 'text.html.basic meta.tag',
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[PUG/JADE] - Punctuation, Brackets',
  //   scope: [
  //     'constant.name.attribute.tag.jade',
  //     'args.mixin.jade',
  //     'string.interpolated.jade',
  //     'text.jade meta.tag.other',
  //     'text.jade constant',
  //   ],
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[PUG/JADE] - Attributes',
  //   scope: 'entity.other.attribute-name.tag.jade',
  //   settings: {
  //     fontStyle: 'italic',
  //   },
  // },
  // {
  //   name: '[PUG/JADE] - Class and ID',
  //   scope: [
  //     'entity.other.attribute-name.class.jade',
  //     'entity.other.attribute-name.id.jade',
  //   ],
  //   settings: {
  //     foreground: '#eabe9a',
  //   },
  // },
  // {
  //   name: '[XML] - Brackets for tags: < and >',
  //   scope: [
  //     'punctuation.definition.tag.xml',
  //     'punctuation.definition.tag.begin.xml',
  //     'punctuation.definition.tag.end.xml',
  //     'meta.scope.between-tag-pair.xml',
  //   ],
  //   settings: {
  //     foreground: '#808080',
  //   },
  // },
  // {
  //   name: '[XML] - Equals sign',
  //   scope: ['meta.tag.xml', 'meta.tag.preprocessor.xml'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[XML] - Attributes',
  //   scope: 'entity.other.attribute-name.localname.xml',
  //   settings: {
  //     fontStyle: 'italic',
  //   },
  // },
  // {
  //   name: '[JS/JSX] - React Tag Names',
  //   scope: [
  //     'source.js support.class.component',
  //     'source.jsx support.class.component',
  //   ],
  //   settings: {
  //     foreground: '#DB6E8F',
  //   },
  // },
  // {
  //   name: '[JS/JSX] - React Tag Attributes',
  //   scope: [
  //     'source.js entity.other.attribute-name',
  //     'source.jsx entity.other.attribute-name',
  //   ],
  //   settings: {
  //     foreground: '#F7E3AF',
  //     fontStyle: 'italic',
  //   },
  // },
  // {
  //   name: '[JS/JSX] - React Tag Property Keys',
  //   scope: [
  //     'source.js meta.jsx.children meta.object-literal.key',
  //     'source.jsx meta.jsx.children meta.object-literal.key',
  //   ],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[JS/JSX] - React Tag Property Values',
  //   scope: [
  //     'source.js meta.tag variable.other.readwrite',
  //     'source.jsx meta.tag variable.other.readwrite',
  //   ],
  //   settings: {
  //     foreground: '#C6878F',
  //   },
  // },
  // {
  //   name: '[JS/JSX] - React Tag Property Values',
  //   scope: [
  //     'punctuation.definition.tag.begin.js',
  //     'punctuation.definition.tag.end.js',
  //   ],
  //   settings: {
  //     foreground: '#808080',
  //   },
  // },
  // {
  //   name: '[JS/JSX] - React Style Tag Text',
  //   scope: ['source.js meta.jsx.children', 'source.jsx meta.jsx.children'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[JS] - `Typeof`, `Instanceof` Operator',
  //   scope: [
  //     'keyword.operator.expression.typeof.js',
  //     'keyword.operator.expression.instanceof.js',
  //   ],
  //   settings: {
  //     foreground: '#D0D6B5',
  //     fontStyle: 'italic',
  //   },
  // },
  // {
  //   name: '[JSON] - Meta',
  //   scope: ['meta.embedded.block.json'],
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[JSON] - Support',
  //   scope: ['source.json support', 'support.json'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[JSON] - Property Names',
  //   scope: ['support.type.property-name.json'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[JSON] - String',
  //   scope: [
  //     'source.json string.json',
  //     'source.json punctuation.definition.string.json',
  //   ],
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Heading Punctuation',
  //   scope: 'punctuation.definition.heading.markdown',
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Heading Name Section',
  //   scope: [
  //     'entity.name.section.markdown',
  //     'markup.heading.setext.1.markdown',
  //     'markup.heading.setext.2.markdown',
  //   ],
  //   settings: {
  //     foreground: '#DB6E8F',
  //     fontStyle: 'bold',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Paragraph',
  //   scope: ['meta.paragraph.markdown'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Brackets in Paragraphs',
  //   scope: ['meta.paragraph.markdown meta.other'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Quote Punctuation',
  //   scope: 'beginning.punctuation.definition.quote.markdown',
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Quote Paragraph',
  //   scope: 'markup.quote.markdown meta.paragraph.markdown',
  //   settings: {
  //     fontStyle: 'italic',
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Separator',
  //   scope: 'meta.separator.markdown',
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Fenced Code',
  //   scope: 'markup.fenced_code.block.markdown',
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Inline Code',
  //   scope: 'markup.inline.raw.string.markdown',
  //   settings: {
  //     foreground: '#D0D6B5',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Emphasis Bold',
  //   scope: [
  //     'markup.bold.markdown',
  //     'markup.bold.markdown punctuation.definition.bold.markdown',
  //   ],
  //   settings: {
  //     foreground: '#bbb',
  //     fontStyle: 'bold',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Emphasis Italic',
  //   scope: 'markup.italic.markdown',
  //   settings: {
  //     fontStyle: 'italic',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Lists',
  //   scope: 'beginning.punctuation.definition.list.markdown',
  //   settings: {
  //     foreground: '#DB6E8F',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Link Title',
  //   scope: 'string.other.link.title.markdown',
  //   settings: {
  //     foreground: '#F9B5AC',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Link/Image Title',
  //   scope: [
  //     'string.other.link.title.markdown',
  //     'string.other.link.description.markdown',
  //     'string.other.link.description.title.markdown',
  //   ],
  //   settings: {
  //     foreground: '#F9B5AC',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Link Address',
  //   scope: [
  //     'markup.underline.link.markdown',
  //     'markup.underline.link.image.markdown',
  //   ],
  //   settings: {
  //     foreground: '#7ea9a9',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Inline Code',
  //   scope: ['fenced_code.block.language', 'markup.inline.raw.markdown'],
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[MARKDOWN] - Code Block',
  //   scope: ['fenced_code.block.language', 'markup.inline.raw.markdown'],
  //   settings: {
  //     foreground: '#A3B09A',
  //   },
  // },
  // {
  //   name: '[SQL] - Database name',
  //   scope: ['constant.other.database-name.sql'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   name: '[SQL] - Table name',
  //   scope: ['constant.other.table-name.sql'],
  //   settings: {
  //     foreground: '#bbb',
  //   },
  // },
  // {
  //   scope: ['markup.error'],
  //   settings: {
  //     foreground: '#CC565EDF',
  //   },
  // },
  // {
  //   scope: ['markup.inserted'],
  //   settings: {
  //     foreground: '#9BBA9A',
  //   },
  // },
  // {
  //   scope: ['markup.deleted'],
  //   settings: {
  //     foreground: '#CC565EDF',
  //   },
  // },
  // {
  //   scope: ['markup.changed'],
  //   settings: {
  //     foreground: '#FFB86C',
  //   },
  // },
]
