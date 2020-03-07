const clickCounter = new ClickCounter();

const clickButton = document.querySelector(".clickButton");
const clickCompanionButton = document.querySelector(".clickCompanionButton");
const clickCompounderButton = document.querySelector(".clickCompounderButton");
const displayedClickCount = document.querySelector(".clickCount");
const displayedClickCompanionCount = document.querySelector(".clickCompanionCount");
const displayedClickCompounderCount = document.querySelector(".clickCompounderCount");

const updateClickCount = (displayedClickCount, clickCounter)=>{
    displayedClickCount.innerText = "Clicks: " + clickCounter.getClickCount();
}

const updateClickCompanionCount = (displayedClickCompanionCount, clickCounter)=> {
    displayedClickCompanionCount.innerText = "Click Companion Count: " + clickCounter.getCompanionClickCount();
}

const updateClickCompounderCount = (displayedClickCompounderCount, clickCounter)=>{
    displayedClickCompounderCount.innerText = "Click Compounder Count: " + clickCounter.getCompounderClickCount();
}

const makeButtonIntoClickCounter = (clickButton, clickCounter, displayedClickCount)=>{
    clickButton.addEventListener('click', ()=> {
        clickCounter.click();
        updateClickCount(displayedClickCount, clickCounter);
    })
}

const compounderButtonBuysCompounder = (clickCompounderButton, clickCounter, displayedClickCompounderCount) => {
    clickCompounderButton.addEventListener('click', ()=> {
        clickCounter.buyClickCompounder();
        updateClickCompounderCount(displayedClickCompounderCount, clickCounter);
    })
}

const companionButtonBuysCompanionClicker = (clickCompanionButton, clickCounter, displayedClickCompanionCount)=> {
    clickCompanionButton.addEventListener('click', ()=>{
        clickCounter.buyCompanionClicker();
        updateClickCompanionCount(displayedClickCompanionCount, clickCounter);
    })
}

makeButtonIntoClickCounter(clickButton, clickCounter, displayedClickCount);
compounderButtonBuysCompounder(clickCompounderButton, clickCounter, displayedClickCompounderCount);
companionButtonBuysCompanionClicker(clickCompanionButton, clickCounter, displayedClickCompanionCount);