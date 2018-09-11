import visit from 'unist-util-visit'

module.exports = ({ markdownAST }, options = { 
    width: '100%', 
    height: 300,
    color: '#ff5500',
    auto_play: false,
    hide_related: true,
    show_comments: true,
    show_user: true,
    show_reposts: false,
    visual: true
}) => {

    visit(markdownAST, `inlineCode`, node => {
        const { value } = node

        if (value.startsWith(`soundcloud:`)) {
            const soundcloud = value.substr(11)

            if (isUrlValid(soundcloud)) {
                node.type = `html`
                node.value = `<div><iframe src="https://w.soundcloud.com/player/?url=${soundcloud}&color=${options.color}&auto_play=${options.auto_play}&hide_related=${options.hide_related}&show_comments=${options.show_comments}&show_user=${options.show_user}&show_reposts=${options.show_reposts}&show_teaser=false&visual=${options.visual}" width="${options.width}" height="${options.height}" frameborder="0" allowtransparency="true"></iframe></div>`
            }
        }

    })

    return markdownAST
}

function isUrlValid(url) {
    var res = url.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    )
    if (res != null) {
        return true
    } else {
        return false
    }
}