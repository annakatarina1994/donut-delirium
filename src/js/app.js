const clickCounter = new ClickCounter();

const clickButton = document.querySelector(".clickButton");
const clickCompanionButton = document.querySelector(".clickCompanionButton");
const clickCompounderButton = document.querySelector(".clickCompounderButton");
const displayedClickCount = document.querySelector(".clickCount");
const displayedClickCompanionCount = document.querySelector(".clickCompanionCount");
const displayedClickCompounderCount = document.querySelector(".clickCompounderCount");
const displayedCompanionCost = document.querySelector(".companionCost");
const displayedCompounderCost = document.querySelector(".compounderCost");
const resetButton = document.querySelector(".resetButton");
const developer = document.querySelector("#developer");
const developerModal = document.querySelector(".developerModal");
const close = document.querySelector(".close");
const companionSection = document.querySelector(".companionSection");

developer.addEventListener('click', ()=>{
    developerModal.style.display = 'block';
})

close.addEventListener('click', ()=>{
    developerModal.style.display = 'none';
})

window.addEventListener('click', (event)=>{
    if(event.target == developerModal){
        developerModal.style.display = 'none';
    }
})

resetButton.addEventListener('click', ()=>{
    window.location.reload();
})

setInterval(()=>{
    for(i = 0; i < clickCounter.getCompanionClickCount(); i++){
        clickCounter.click();
        updateClickCount(displayedClickCount, clickCounter);
    }
}, 1000);

//not yet working, revisit
const enableCompounderButton = (clickCompounderButton, clickCounter) =>{
    if(clickCounter.clickCount < 10){
        clickCompounderButton.disabled = true;
    }else{
        clickCompounderButton.disabled = false;
    }
}

const updateClickCount = (displayedClickCount, clickCounter)=>{
    displayedClickCount.innerText = "Donuts: " + clickCounter.getClickCount();
}

const updateClickCompanionCount = (displayedClickCompanionCount, clickCounter)=> {
    displayedClickCompanionCount.innerText = "Bakers: " + clickCounter.getCompanionClickCount();
}

const updateClickCompounderCount = (displayedClickCompounderCount, clickCounter)=>{
    displayedClickCompounderCount.innerText = "Cups of Joe: " + clickCounter.getCompounderClickCount();
}

const updateClickCompanionCost = (displayedCompanionCost, clickCounter) =>{
    displayedCompanionCost.innerText = "You can buy a baker for " + clickCounter.getCompanionCost() + " donuts who will help you make even more donuts!"
}

const updateClickCompounderCost = (displayedCompounderCost, clickCounter) =>{
    displayedCompounderCost.innerText = "You can buy a cup of joe for " +  clickCounter.getCompounderCost() + " donuts. Every cup you buy makes your clicks worth more donuts!"
}

const makeButtonIntoClickCounter = (clickButton, clickCounter, displayedClickCount)=>{
    clickButton.addEventListener('click', ()=> {
        clickCounter.click();
        updateClickCount(displayedClickCount, clickCounter);
    })
}

const compounderButtonBuysCompounder = (clickCompounderButton, clickCounter, displayedClickCompounderCount, displayedClickCount) => {
    clickCompounderButton.addEventListener('click', ()=> {
        clickCounter.buyClickCompounder();
        clickCounter.compounderIncreasesClickValue();
        updateClickCompounderCount(displayedClickCompounderCount, clickCounter);
        updateClickCompounderCost(displayedCompounderCost, clickCounter);
        updateClickCount(displayedClickCount, clickCounter);
    })
}

const companionButtonBuysCompanionClicker = (clickCompanionButton, clickCounter, displayedClickCompanionCount, displayedClickCount)=> {
    clickCompanionButton.addEventListener('click', ()=>{
        clickCounter.buyCompanionClicker();
        updateClickCompanionCount(displayedClickCompanionCount, clickCounter);
        updateClickCompanionCost(displayedCompanionCost, clickCounter);
        updateClickCount(displayedClickCount, clickCounter);
    })
}


makeButtonIntoClickCounter(clickButton, clickCounter, displayedClickCount);
compounderButtonBuysCompounder(clickCompounderButton, clickCounter, displayedClickCompounderCount, displayedClickCount);
companionButtonBuysCompanionClicker(clickCompanionButton, clickCounter, displayedClickCompanionCount, displayedClickCount);