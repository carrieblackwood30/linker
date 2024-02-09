const registration = document.querySelector('.registration')
const onlineMembersList = document.querySelector('.onlineMembersList')

const member = {
        name: 'Leonard Hofstadter',
        img: 'https://img-cdn.brainberries.co/wp-content/uploads/2020/06/Hidden-Things-in-the-Big-Bang-Theory-08-1024x746.jpg'
    }

registration.addEventListener('click', () =>{
    
    let createOnlineMember = document.createElement('div')
    let createImgCarcass = document.createElement('div')
    let createImg = document.createElement('img')
    let createName = document.createElement('h4')

    createOnlineMember.classList.add('member')

    createImgCarcass.classList.add('member-img')
    createImg.classList.add('member-img')
    createImg.src = member.img
    createImgCarcass.append(createImg)

    createName.classList.add('MembersName')
    createName.textContent = member.name

    createOnlineMember.append(createImgCarcass)
    createImgCarcass.append(createName)

    onlineMembersList.append(createOnlineMember)
})