import CMS from 'netlify-cms-app'
import {withLayout, withStyledSheets} from './wrappers'
// import fontAwesomeCSS from '@fortawesome/fontawesome-svg-core/styles.css'

import AnnouncementPreview from './preview-templates/AnnouncementPreview'
import HomePreview from './preview-templates/HomePreview'
import BookPreview from './preview-templates/BookPreview'
import AuthorPreview from './preview-templates/AuthorPreview'
import MabelPreview from './preview-templates/MabelPreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import EventsPreview from './preview-templates/EventsPreview'

CMS.registerPreviewStyle(
  'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-svg-core@1.2.25/styles.css',
)
// For some reason this stopped working
// CMS.registerPreviewStyle(fontAwesomeCSS)

CMS.registerPreviewTemplate(
  'announcement',
  withStyledSheets(AnnouncementPreview),
)
CMS.registerPreviewTemplate('home', withLayout(HomePreview))
CMS.registerPreviewTemplate('books', withLayout(BookPreview))
CMS.registerPreviewTemplate('author', withLayout(AuthorPreview))
CMS.registerPreviewTemplate('biography', withLayout(AuthorPreview))
CMS.registerPreviewTemplate('inspiration', withLayout(AuthorPreview))
CMS.registerPreviewTemplate('mabel', withLayout(MabelPreview))
CMS.registerPreviewTemplate('blog', withLayout(BlogPostPreview))
CMS.registerPreviewTemplate('articles', withLayout(ArticlePreview))
CMS.registerPreviewTemplate('short-stories', withLayout(ArticlePreview))
CMS.registerPreviewTemplate('events', withLayout(EventsPreview))
