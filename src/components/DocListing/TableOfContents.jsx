import React from "react"
import Link from 'gatsby-link'
import { GetDocNodes } from './DocStructure'

class TableOfContents extends React.Component {
  tocListItems() {
    const {docEdges} = this.props
    const docNodes = GetDocNodes(docEdges)
    const nodeChapterLessons = docNodes.nodeChapterLessons
    const nodeChapters = docNodes.nodeChapters
    const listItems = []

    nodeChapters.forEach((chapter) => {
      const chapterKey = chapter.key
      const chapterLessons = nodeChapterLessons[chapterKey]
      const listItemLessons = []

      chapterLessons.forEach(lesson => {
        listItemLessons.push(
          <div className='lessonContainer'>
            <Link to={lesson.path}>
              <li>
                <h3>{chapter.number}.{lesson.number} &nbsp; {lesson.title}</h3>
              </li>
            </Link>
          </div>
        )
      })
      listItems.push(
        <li className='chapter'>
          <Link to={chapter.path}>
            <h2 className='tocHeading'>
              {chapter.title.toUpperCase()}
            </h2>
          </Link>
          <ul className='chapterItems'>
            {listItemLessons}
          </ul>
        </li>
      )
    })
    return listItems
  }

  render() {
    return (
      <div className='tocContainer'>
        <ul>
          {this.tocListItems()}
        </ul>
      </div>
    )
  }
}

export default TableOfContents

