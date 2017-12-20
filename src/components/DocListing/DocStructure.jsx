
export const GetDocChapters = (edges) => {
  const nodeChapters = [];

  // Get all chapter nodes
  edges.forEach(edge => {
    if (edge.node.frontmatter.type === 'chapter') {
      const nodeChapter = {
        title: edge.node.frontmatter.header,
        path: (edge.node.fields.instance) ? `/${edge.node.fields.instance}${edge.node.fields.slug}` : edge.node.fields.slug,
        number: edge.node.frontmatter.number,
        key: edge.node.frontmatter.title,
      }
      nodeChapters.push(nodeChapter)
    }
  })

  // Sort array of chapters
  nodeChapters.sort((a, b) => a.number > b.number)

  return nodeChapters
}

export const GetDocNodes = (edges) => {
  const nodeChapters = GetDocChapters(edges)

  // Get all lesson nodes
  const nodeLessons = []
  edges.forEach(edge => {
    if (edge.node.frontmatter.type === 'lesson') {
      const nodeLesson = {
        title: edge.node.frontmatter.header,
        path: (edge.node.fields.instance) ? `/${edge.node.fields.instance}${edge.node.fields.slug}` : edge.node.fields.slug,
        number: edge.node.frontmatter.number,
        chapter: edge.node.frontmatter.chapter
      }
      nodeLessons.push(nodeLesson)
    }
  })

  // Assign lessons to the according chapter
  const nodeChapterLessons = {};
  nodeChapters.forEach(chapter => {
    const lessonList = []
    nodeLessons.forEach(lesson => {
      if (lesson.chapter === chapter.key) {
        lessonList.push(lesson)
      }
    })
    lessonList.sort((a, b) => a.number > b.number)
    nodeChapterLessons[chapter.key] = lessonList
  })

  const result = { nodeChapters, nodeLessons, nodeChapterLessons }
  return result
}