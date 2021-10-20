// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
// *action.payload are our actual posts from dispatch({type:'FETCH_ALL', payload:[]})
export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            // *if the post._id is === the action.payload._id(whicih is the updatedd post); then we return the action.payload
                // *action.payload is the newly updated post
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }

}





// const reducer = (state, action) => {
//     if(action.type==='Create'){
//         return action || state
//     }

// }