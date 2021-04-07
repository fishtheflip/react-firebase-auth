const INITIAL_STATE = { quote: []}

const reducer = (state = INITIAL_STATE, action) =>{
    console.log(action.type);
    
    switch(action.type){
        case 'ADD':
            let got = action.payload;
            if(got[1] === '') return state;
            let newItem = {
                author: got[0],
                message: got[1]
            }
            return {quote:[...state.quote, newItem]};
            
        default: 
            return state;
    }

}
export default reducer;