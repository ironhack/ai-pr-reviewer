const IRONHACK_PROMPT = `
Please review the provided content against the following guidelines. Is ok if you don't find anything relevant to say, to avoid creating unnecessary noise:
Formatting and Structure
[ ]  Does the lesson start with a "Lesson Overview" section that summarizes the content and purpose?
[ ]  Is there a "Learning Objectives" section that outlines the key skills and knowledge covered? 
[ ]  Are the objectives phrased using action-oriented verbs like "Understand", "Learn", "Practice"?
[ ]  Is each objective on its own bullet point?
[ ]  Is the main content organized into subsections with descriptive headings, such as "Key Definitions and Examples", "Benefits", and "Common Use Cases"?
[ ]  Does the lesson conclude with an "Additional Resources" section linking to external content for further study?
Headings and Hierarchy
[ ]  Are Markdown heading levels used to establish a clear content hierarchy? 
[ ]  Is # used for the main lesson title?
[ ]  Is ## used for top-level sections?
[ ]  Is ### used for subsections?
[ ]  Is #### used for sub-subsections if needed?
[ ]  Are all headings written in Title Case for consistency?
[ ]  Are headings concise yet descriptive?
Text Formatting
[ ]  Is bold text used sparingly and enclosed in double asterisks (*bold text**)?
[ ]  Is italicized text used for emphasis, notes, or secondary information and enclosed in single asterisks (italicized text*)?
[ ]  Are important notes or asides formatted as blockquotes using >?
Lists and Bullet Points
[ ]  Are unordered lists and bullet points denoted with hyphens (\`\`)?
[ ]  Are ordered lists denoted with numbers followed by periods (1., 2.)?
[ ]  Are sub-bullets indented by 2 spaces?
[ ]  Are bullet points concise (1-2 sentences each), with sub-bullets used for additional details?
Code Snippets
[ ]  Are code snippets or command line examples enclosed in code fences (\`\`\`\`\`)?
[ ]  Is the language specified after the opening fence for syntax highlighting (e.g., \`\`\`\`python\`)?
[ ]  Are code snippets indented by 4 spaces?
[ ]  Is inline code formatting used with single backticks for brief code mentions within sentences?
Links and References
[ ]  Are external resources linked using inline link syntax ([link text](url))?
[ ]  Are references to other parts of the lesson linked using relative links ([link text](#heading-anchor))?
[ ]  Do all links have descriptive link text that conveys the destination or purpose?
Images and Media
[ ]  Are images hosted on a reliable content delivery network (CDN) for fast loading?
[ ]  Are images embedded using Markdown syntax (![alt text](image url))?
[ ]  Is descriptive alt text provided for all images?
[ ]  Is the use of animated GIFs or large media files limited?
[ ]  Do image files follow a consistent naming convention (e.g., lowercase with hyphens)?
Error Messages and Examples
[ ]  Are error messages formatted consistently, either inline within sentences or as separate block elements?
[ ]  When error messages are included with code snippets, are they clearly distinguished from the code?
[ ]  For code examples that produce an error, is the error explained along with its cause in the surrounding text?
Consistency and Voice
[ ]  Is the second-person pronoun "you" used to address the reader directly?
[ ]  Does the content maintain a friendly, instructional tone throughout?
[ ]  Is jargon or highly technical terminology avoided unless defined and necessary?
[ ]  Are acronyms spelled out on first use and abbreviations introduced before being used?
Formatting Consistency
[ ]  Are <br> tags avoided in favor of Markdown's double-space new lines for consistency?
[ ]  If <!-- don't remove --> comments are present, is their purpose clear and necessary?
[ ]  Are all headings consistently capitalized in Title Case?
[ ]  Do all code snippets have language identifiers after the opening fence for proper syntax highlighting?
[ ]  Is a consistent format (inline or block) used for all error messages?
[ ]  Do all image files follow a consistent naming convention?
[ ]  Is consistent phrasing used to introduce additional resources across lessons?
Please provide feedback on any areas where the content does not align with these guidelines, along with suggestions for improvement. The goal is to ensure consistency, clarity, and effectiveness in Ironhack's learning materials.
`

export class Inputs {
  systemMessage: string
  title: string
  description: string
  rawSummary: string
  shortSummary: string
  filename: string
  fileContent: string
  fileDiff: string
  patches: string
  diff: string
  commentChain: string
  comment: string

  constructor(
    systemMessage = IRONHACK_PROMPT,
    title = 'no title provided',
    description = 'no description provided',
    rawSummary = '',
    shortSummary = '',
    filename = '',
    fileContent = 'file contents cannot be provided',
    fileDiff = 'file diff cannot be provided',
    patches = '',
    diff = 'no diff',
    commentChain = 'no other comments on this patch',
    comment = 'no comment provided'
  ) {
    this.systemMessage = systemMessage
    this.title = title
    this.description = description
    this.rawSummary = rawSummary
    this.shortSummary = shortSummary
    this.filename = filename
    this.fileContent = fileContent
    this.fileDiff = fileDiff
    this.patches = patches
    this.diff = diff
    this.commentChain = commentChain
    this.comment = comment
  }

  clone(): Inputs {
    return new Inputs(
      this.systemMessage,
      this.title,
      this.description,
      this.rawSummary,
      this.shortSummary,
      this.filename,
      this.fileContent,
      this.fileDiff,
      this.patches,
      this.diff,
      this.commentChain,
      this.comment
    )
  }

  render(content: string): string {
    if (!content) {
      return ''
    }
    if (this.systemMessage) {
      content = content.replace('$system_message', this.systemMessage)
    }
    if (this.title) {
      content = content.replace('$title', this.title)
    }
    if (this.description) {
      content = content.replace('$description', this.description)
    }
    if (this.rawSummary) {
      content = content.replace('$raw_summary', this.rawSummary)
    }
    if (this.shortSummary) {
      content = content.replace('$short_summary', this.shortSummary)
    }
    if (this.filename) {
      content = content.replace('$filename', this.filename)
    }
    if (this.fileContent) {
      content = content.replace('$file_content', this.fileContent)
    }
    if (this.fileDiff) {
      content = content.replace('$file_diff', this.fileDiff)
    }
    if (this.patches) {
      content = content.replace('$patches', this.patches)
    }
    if (this.diff) {
      content = content.replace('$diff', this.diff)
    }
    if (this.commentChain) {
      content = content.replace('$comment_chain', this.commentChain)
    }
    if (this.comment) {
      content = content.replace('$comment', this.comment)
    }
    return content
  }
}
