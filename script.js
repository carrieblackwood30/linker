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

    let createCloseBtn = document.createElement('img')
    createCloseBtn.classList.add('close-btn')
    createCloseBtn.src = `https://cdn1.iconfinder.com/data/icons/simple-ui-11/32/100_icon_set-14-1024.png`
   
    createCloseBtn.addEventListener('click', function(event){
        event.stopPropagation()
        createPost.remove()
    })

    let heading = prompt('your heading')
    let createHeading = document.createElement('h3')
    createHeading.classList.add('head')
    createHeading.textContent = heading

    let paragraph = prompt('your paragraph')
    let createParagraph = document.createElement('p')
    createParagraph.classList.add('paragraph')
    createParagraph.textContent = paragraph

    let createColorPicker = document.createElement('input')
    createColorPicker.type = 'color'
    createColorPicker.classList.add('color-picker')
    createColorPicker.addEventListener('input', function(){
        createPost.style.color = createColorPicker.value
    })

    let createLinkArea = document.createElement('a')
    createLinkArea.style.display = 'block'

    let createRandomLinkerBtn = document.createElement('button')
    createRandomLinkerBtn.classList.add('createLink')
    createRandomLinkerBtn.innerText = 'create a link'
    createRandomLinkerBtn.addEventListener('click', () =>{
    
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersSplitter = characters.split('')
        let randomCharacters = charactersSplitter.sort(() => Math.random() - 0.5)
        let finalCharacters = randomCharacters.join('')
        
        
        createLinkArea.href = characters 
        createLinkArea.innerText = `linker.com/post/${finalCharacters}.com`
    })

    createPost.append(createHeading)
    createPost.append(createParagraph)
    createPost.append(createColorPicker)
    createPost.append(createRandomLinkerBtn)
    createPost.append(createLinkArea)
    createPost.append(createCloseBtn)
})