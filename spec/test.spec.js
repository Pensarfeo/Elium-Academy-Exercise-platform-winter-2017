myClass = "asdf"

const runTest = function(){

    describe( 'Exericise 1',  ()=>{

        it('myClass variable should be defined', () => {
            expect(myClass).toBeDefined()
        })
        it('myClass should be an object', () => {
            expect(typeof myClass).toBe("object")
        })
    })
    describe( 'bananas 1',  ()=>{
        it('myClass variable should be defined', () => {

            expect(myClass).toBeDefined()
        })
        it('myClass should be an object', () => {
            expect(typeof myClass).toBe("object")
        })
    })
    describe( 'bananas 2',  ()=>{
        it('myClass variable should be defined', () => {
            expect(myClass).toBeDefined()
        })
    })
}

            
module.exports = runTest