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
    
    posts.innerHTML += ` <div class="post">
    <img src="src/close.svg" alt="close-icon" class="close-btn" id="closeBtn">
    
    <div class="content">
        <h3 class="head">First Linker</h3>
        <p class="paragraph">my first post! hello world</p>
    </div>

    <input type="color" class="color-picker" id="colorPicker">
    <button class="createLink">create a link:</button><br>
    <a href="" class="linkArea"></a>

</div>`
    
})