document.addEventListener("DOMContentLoaded", function() {

let btn2 = document.getElementById('main-right-btn')
let slides = document.querySelectorAll('.main-slides')
let position = 0
let slides_Side = slides.length

const updateSlides = () => {
    slides.forEach((slide)=>{
        slide.classList.remove("activation")
    })

    newBars.forEach((dots)=>{
        dots.classList.remove("colorchage")
    })

    slides[position].classList.add('activation')
    newBars[position].classList.add('colorchage')
}

const rightClick = () => {
    if (position<slides_Side-1){
        position++
    }else{
        position=0
    }

    updateSlides()
}

btn2.addEventListener('click',()=>{
    rightClick()
})


setInterval(()=>{
    rightClick()
},3000)

let dots_parent = document.querySelector(".select-btns")

for(let i=0; i<slides_Side; i++){
    let newdot = document.createElement('div')
    newdot.className = 'dots'
    dots_parent.appendChild(newdot)
}

let newBars = document.querySelectorAll('.dots')
newBars[position].classList.add('colorchage')

newBars.forEach((dot, index)=>{
    dot.addEventListener('click',()=>{
        position=index
        updateSlides()
    })
})


// cards area

let members = document.getElementById('members')
let gold = document.getElementById('gold')
let silver = document.getElementById('silver')
let platinum = document.getElementById('platinum')
let Membershipcard = document.querySelector('.Membership-card')
let SilverCard = document.querySelector('.Silver-card')
let GoldCard = document.querySelector('.Gold-card')
let PlatinumCard = document.querySelector('.Platinum-card')
let listofbuttons = document.querySelectorAll('.real-cards')

const ClassRemover = () => {
    listofbuttons.forEach((btn)=>{
        btn.classList.remove('activation')
    })

    stripes.forEach((lines)=>{
        lines.classList.remove('border-class')
    })
}

members.addEventListener('click',()=>{
    ClassRemover()
    Membershipcard.classList.add('activation')
})

gold.addEventListener('click',()=>{
    ClassRemover()
    GoldCard.classList.add('activation')
})

silver.addEventListener('click',()=>{
    ClassRemover()
    SilverCard.classList.add('activation')
})

platinum.addEventListener('click',()=>{
    ClassRemover()
    PlatinumCard.classList.add('activation')
})


let stripes = document.querySelectorAll(".card-area-toggle ul li")

stripes.forEach((line) => {
    line.addEventListener('click', () => {
        line.classList.add('border-class');
    });
});









// Offer Zone

let card_offer = document.querySelectorAll(".offers ul li")
let card_parent = document.querySelectorAll(".dis-carousal")
let twenty_percent = document.getElementById('20_percent')
let thirty_percent = document.getElementById('30_percent')
let fifty_percent = document.getElementById('50_percent')
let sixty_percent = document.getElementById('60_percent')
let batch_one = document.querySelector('.batch_one')
let batch_two = document.querySelector('.batch_two')
let batch_three = document.querySelector('.batch_three')
let batch_four = document.querySelector('.batch_four')

const BatchUpdation = () => {
    card_parent.forEach((card)=>{
        card.classList.remove('activation')
    })

    card_offer.forEach((card)=>{
        card.classList.remove('newWhites')
    })

}

twenty_percent.addEventListener('click',()=>{
    BatchUpdation()
    batch_one.classList.add('activation')
})

thirty_percent.addEventListener('click',()=>{
    BatchUpdation()
    batch_two.classList.add('activation')
})

fifty_percent.addEventListener('click',()=>{
    BatchUpdation()
    batch_three.classList.add('activation')
})

sixty_percent.addEventListener('click',()=>{
    BatchUpdation()
    batch_four.classList.add('activation')
})

card_offer.forEach((offer)=>{
    offer.addEventListener('click',()=>{
        offer.classList.add('newWhites')
    })
})


// Toggle Button
let sandwichBtn = document.getElementById('sandwichBtn')
let headerRight = document.querySelector('.headerRight')
let headerRightUlLi = document.querySelectorAll('.headerRight nav ul li')

sandwichBtn.addEventListener('click',()=>{
    headerRight.classList.toggle('activation')
    // headerRightUl.classList.remove('deactivate')
})



headerRightUlLi.forEach((links)=>{
    links.addEventListener('click',()=>{
        headerRight.classList.toggle('activation')
    })
})

// Countdown Timer

let countdownTimer = () => {

let minutes = 60
let SecondsElement = document.getElementById("seconds")
let MinutesElement = document.getElementById("minutes")
let second = 60

setInterval(()=>{
    if(second>0){
        second--
        SecondsElement.innerHTML=second
    }else{
        second=60
    }
},1000)

setInterval(()=>{
    if(minutes>0){
        minutes--
        MinutesElement.innerHTML=minutes
    }else{
        minutes=59
    }
},60000)

}

countdownTimer()


})