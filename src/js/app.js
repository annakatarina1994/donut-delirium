const clickCounter = new ClickCounter();

const clickButton = document.querySelector(".clickButton");
const clickCompanionButton = document.querySelector(".clickCompanionButton");
const clickCompounderButton = document.querySelector(".clickCompounderButton");
const displayedClickCount = document.querySelector(".clickCount");
const displayedClickCompanionCount = document.querySelector(".clickCompanionCount");
const displayedClickCompounderCount = document.querySelector(".clickCompounderCount");
const displayedCompanionCost = document.querySelector(".companionCost");
const displayedCompounderCost = document.querySelector(".compounderCost");

setInterval(()=>{
    for(i = 0; i < clickCounter.getCompanionClickCount(); i++){
        clickCounter.click();
        updateClickCount(displayedClickCount, clickCounter);
    }
}, 1000);


//i feel like i'll need this somewhere but i don't know where to put it
for(i = 0; i < clickCounter.getCompounderClickCount(); i++){
    clickCounter.compounderIncreasesClickValue();
    updateClickCount(displayedClickCount, clickCounter);
}


//this shit ain't working, please revisit************
//is there a way to access clickCount variable another way?...
const enableCompounderButton = (clickCompounderButton, clickCounter) =>{
    if(clickCounter.getClickCount() < 10){
        clickCompounderButton.disabled = true;
    }else{
        clickCompounderButton.disabled = false;
    }
}

const updateClickCount = (displayedClickCount, clickCounter)=>{
    displayedClickCount.innerText = "Score: " + clickCounter.getClickCount();
}

const updateClickCompanionCount = (displayedClickCompanionCount, clickCounter)=> {
    displayedClickCompanionCount.innerText = "Click Companion Count: " + clickCounter.getCompanionClickCount();
}

const updateClickCompounderCount = (displayedClickCompounderCount, clickCounter)=>{
    displayedClickCompounderCount.innerText = "Click Compounder Count: " + clickCounter.getCompounderClickCount();
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

//*disable/enabling buttons not working
//*compounder not working but i doubt i can even get that done anyway because its confusing