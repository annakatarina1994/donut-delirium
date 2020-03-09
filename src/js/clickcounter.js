class ClickCounter{
    constructor(){
        this.clickCount = 100;
        this.companionClickCount = 0;
        this.compounderClickCount = 0;
        this.companionCost = 100;
        this.compounderCost = 10;
        this.clickValue = 1;
    }

    click(){
        this.clickCount++;
    }

    getClickCount(){
        if(this.clickCount < 0){
           return this.clickCount = 0;
        }else{
        return this.clickCount;}
    }

    getCompanionClickCount(){
        return this.companionClickCount;
    }
    
    buyCompanionClicker(){
        if(this.clickCount >= 100){
            this.companionClickCount++;
            this.subtractCompanionCost();
            this.increaseCompanionCost();
        }
    }

    subtractCompanionCost(){
        this.clickCount -= 100;
    }

    getCompanionCost(){
       return Math.floor(this.companionCost);
    }

    increaseCompanionCost(){
        this.companionCost *= 1.1;
    }

    companionIncreasesClickCount(){
        this.clickCount += this.companionClickCount;
    }

    getCompounderClickCount(){
        return this.compounderClickCount;
    }

    buyClickCompounder(){
        if(this.clickCount >= 10){
            this.compounderClickCount++;
            this.subtractCompounderCost();
            this.increaseCompounderCost();
            this.clickValue = 1.2;
        }
    }

    subtractCompounderCost(){
        this.clickCount -= 10;
    }

    increaseCompounderCost(){
        this.compounderCost *= 1.1;
    }

    getCompounderCost(){
        return Math.floor(this.compounderCost);
    }

    compounderIncreasesClickValue(){
            this.clickValue = Math.pow(1.2, this.getCompounderClickCount());
    }

    getClickValue(){
        return this.clickValue;
    }
}