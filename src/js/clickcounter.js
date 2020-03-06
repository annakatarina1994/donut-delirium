class ClickCounter{
    constructor(){
        this.clickCount = 0;
        this.companionClickCount = 0;
        this.companionCost = 100;
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
        
    }
}