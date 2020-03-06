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
            underTest.companionIncreasesClickCount();
            
        })
    });
})
