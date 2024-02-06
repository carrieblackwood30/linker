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

    linkArea.innerText = `linker.com/post/${finalCharacters}/`
})

createPostBtn.addEventListener('click', () =>{
    
    posts.innerHTML += "HIS HET"
    
})