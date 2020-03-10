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


//this shit ain't working, please revisit************
//is there a way to access clickCount variable another way?...
const enableCompounderButton = (clickCompounderButton, clickCounter) =>{
    if(clickCounter.clickCount < 10){
        clickCompounderButton.disabled = true;
    }else{
        clickCompounderButton.disabled = false;
    }
}

const updateClickCount = (displayedClickCount, clickCounter)=>{
    displayedClickCount.innerText = "Score: " + clickCounter.getClickCount();
}

const updateClickCompanionCount = (displayedClickCompanionCount, clickCounter)=> {
    displayedClickCompanionCount.innerText = "Click Companions: " + clickCounter.getCompanionClickCount();
}

const updateClickCompounderCount = (displayedClickCompounderCount, clickCounter)=>{
    displayedClickCompounderCount.innerText = "Click Compounders: " + clickCounter.getCompounderClickCount();
}

const updateClickCompanionCost = (displayedCompanionCost, clickCounter) =>{
    displayedCompanionCost.innerText = "You can buy a clicking companion for " + clickCounter.getCompanionCost() + " clicks."
}

const updateClickCompounderCost = (displayedCompounderCost, clickCounter) =>{
    displayedCompounderCost.innerText = "You can buy a click compounder for " +  clickCounter.getCompounderCost() + " clicks."
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