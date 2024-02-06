const closeBtn = document.querySelector('#closeBtn')
const content = document.querySelector('.content')
const post = document.querySelector('.post')
const posts = document.querySelector('.posts')
const colorPicker = document.querySelector('#colorPicker')
const createLinkBtn = document.querySelector('.createLink')
const createPostBtn = document.querySelector('#createPostBtn')

closeBtn.addEventListener('click', (event) =>{
    event.stopPropagation()
    post.remove()
})

colorPicker.addEventListener('input', function(){
    content.style.color = colorPicker.value
})

createLinkBtn.addEventListener('click', () =>{
    const linkArea = document.querySelector('.linkArea')

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersSplitter = characters.split('')
    let randomCharacters = charactersSplitter.sort(() => Math.random() - 0.5)
    let finalCharacters = randomCharacters.join('')

    linkArea.innerText = `linker.com/post/${finalCharacters}.com`
})

createPostBtn.addEventListener('click', () =>{

    let createPost = document.createElement('div')
    createPost.classList.add('post')

    posts.append(createPost)

    let heading = prompt('your heading')
    
    let createHeading = document.createElement('h3')
    createHeading.classList.add('head')
    createHeading.textContent = heading

    createPost.append(createHeading)

    let paragraph = prompt('your paragraph')

    let createParagraph = document.createElement('p')
    createParagraph.classList.add('paragraph')
    createParagraph.textContent = paragraph

    createPost.append(paragraph)
})