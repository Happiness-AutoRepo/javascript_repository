describe('before after suite', function() {

    describe('Outer describe', () => {
        
        beforeAll(function() {
            console.log("Inside Outer Before All");
        });

        beforeEach(function() {
            console.log("Inside Outer Before Each");
        });

        it('spec A', () => {
            console.log("Inside spec A");
        });

        it('spec B', () => {
            console.log("Inside spec B");
        });

        describe('Inner describe', () => {
            
            beforeAll(() => {
                console.log("Inside Inner Before All");
            });

            beforeEach(() => {
                console.log("Inside Inner Before Each");
            });

            it('spec C', () => {
                console.log("Inside spec C");
            });
    
            it('spec D', () => {
                console.log("Inside spec D");
            });
        });
    });
})