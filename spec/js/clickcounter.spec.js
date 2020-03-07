describe("Clicking Calamity Tests", () => {
    let underTest;

    beforeEach(()=>{
        underTest = new ClickCounter();
    })
    describe('countClick() records a click and returns the clickCount', () => {
        it('Return 1 when clicked once', () => {
            underTest.click();
            expect(underTest.getClickCount()).toBe(1);
        });
        it('Return 2 when clicked twice', () => {
            underTest.click();
            underTest.click();
            expect(underTest.getClickCount()).toBe(2);
        })
    });
    describe('Clicking Companion Test', () => {
        it("Should start with 0 companions", ()=>{
            expect(underTest.getCompanionClickCount()).toBe(0);
        })
        it("Can add to the CompanionClickCount", ()=>{
            for(let i = 0; i<101; i++){
                underTest.click();
            }
            underTest.buyCompanionClicker();
            expect(underTest.getCompanionClickCount()).toBe(1);
        })
        
        it("Subtract Clicking Companion cost from click amount", ()=>{
            for(let i = 0; i<101; i++){
                underTest.click();
            }
            underTest.subtractCompanionCost();
            expect(underTest.getClickCount()).toBe(1);
        })
        it("Cannot purchase companion if you don't have enough clicks", ()=>{
            underTest.buyCompanionClicker();
            expect(underTest.getCompanionClickCount()).toBe(0);
        })
    });
    describe('The cost of the Clicking Companions goes up with each purchase', () => {
        it('Increase cost of 2nd companion by 10%', () =>{
            for(let i = 0; i<101; i++){
                underTest.click();
            }
            underTest.buyCompanionClicker();
            expect(underTest.getCompanionCost()).toBe(110);
        });
        it('increase cost of each additional Clicking Companion by 10%', ()=>{
            for(let i = 0; i<300; i++){
                underTest.click();
            }
            underTest.buyCompanionClicker();
            underTest.buyCompanionClicker();
            expect(underTest.getCompanionCost()).toBe(121);
        })
        it("clicks added by clicking companions should be added to click total", ()=>{
            for(let i = 0; i<101; i++){
                underTest.click();
            }
            underTest.buyCompanionClicker();
            underTest.companionIncreasesClickCount();
            expect(underTest.getCompanionClickCount()).toBe(1);
        })
    });
    describe('Be able to buy first Compounder with 10 clicks from clickCount', () => {
        it('Can retrieve Compounder count', ()=>{
            expect(underTest.getCompounderClickCount()).toBe(0);
        });
        it('Can add to the Compounder count', ()=>{
            for(let i = 0; i<11; i++){
                underTest.click();
            }
            underTest.buyClickCompounder();
            expect(underTest.getCompounderClickCount()).toBe(1);
        })
        it('Subtract Compounder cost from total clickCount', ()=>{
            for(let i = 0; i<11; i++){
                underTest.click();
            }
            underTest.subtractCompounderCost();
            expect(underTest.getClickCount()).toBe(1);
        })
        it('Increase cost of 2nd Compounder by 10%', ()=>{
            for(let i = 0; i<22; i++){
                underTest.click();
            }
            underTest.buyClickCompounder();
            expect(underTest.getCompounderCost()).toBe(11);
        })
        it('increase cost of each additional Compounder by another 10%', ()=>{
            for(let i = 0; i<22; i++){
                underTest.click();
            }
            underTest.buyClickCompounder();
            underTest.buyClickCompounder();
            expect(underTest.getCompounderCost()).toBe(12);
        })
        it('cannot purchase a Compounder if you don\'t have enough clicks', ()=>{
            underTest.buyClickCompounder();
            expect(underTest.getCompounderClickCount()).toBe(0);
        })
        it('first Compounder bought should increase click value to 1.2', ()=>{
            for(let i = 0; i<10; i++){
                underTest.click();
            }
            underTest.buyClickCompounder();
            underTest.compounderIncreasesClickValue();
            expect(underTest.getClickValue()).toBe(1.2);
        })
        it('Increase click value to 1.2 to the x power based on Compounder Count', ()=>{
            for(let i = 0; i<20; i++){ 
                underTest.click();
            }
            underTest.buyClickCompounder();
            underTest.compounderIncreasesClickValue();
            underTest.buyClickCompounder();
            underTest.compounderIncreasesClickValue();
            expect(underTest.getClickValue()).toBe(1.44);
        })
        it('When companion clicker clicks, increase click value according to the # of compounders', ()=>{
            for(let i = 0; i<110; i++){ 
                underTest.click();
            }
            underTest.buyCompanionClicker();
            underTest.buyClickCompounder();
            expect(underTest.getClickValue()).toBe(1.2);
        })
    });
})
