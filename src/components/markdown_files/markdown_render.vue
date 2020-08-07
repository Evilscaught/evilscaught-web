
<script>
// Import parser function
import { parser } from '@vuese/parser'
import { Render } from '@vuese/markdown-render'

// Read vue file content
const source = fs.readFileSync('path-to-your-component.vue', 'utf-8')

// Parse and get the result using the parser function
try {
  const parserRes = parser(source)
  // Create a render instance
  const r = new Render(parserRes)
  // Basic rendering, the return value is an object
  const renderRes = r.render()
  // Render full markdown text, return value is markdown string
  const markdownRes = r.renderMarkdown()
} catch(e) {
  console.error(e)
}
</script>