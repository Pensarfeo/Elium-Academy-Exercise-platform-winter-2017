const path           = require('path');
const fs             = require("fs")
const $              = require ('cheerio');
const highlights     = require('highlights')
const marked         = require ('marked');
const entities       = require('html-entities').XmlEntities;

const highlighter = new highlights()
highlighter.requireGrammarsSync({
    modulePath: path.join(__dirname, "md")
})

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

module.exports = function(exPath){
    const mdPath = path.join(exPath)
    const mark = marked(fs.readFileSync (mdPath, 'utf8'));

    let html= $.load(mark)
    html('pre').map( (i , block) => {
        const codeBlock = $(block)
        const decodedBlock = entities.decode(codeBlock.find('code').html())
        const highlighted = highlighter.highlightSync({
                                            fileContents: decodedBlock,
                                            scopeName: 'source.js.jsx'
                                        })
        codeBlock.after(highlighted)
        codeBlock.remove()
    })
    
    return html.html()
}
