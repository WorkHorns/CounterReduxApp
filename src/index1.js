import {createStore} from 'redux'

//state = undefined выставлен в параметр 0 по умолчанию.
const reducer = (state = 0, action) => {
    switch(action.type) {
      case 'INC':
        return state + 1;
      case 'DEC':
        return state - 1;
      case 'RND':
        return state + action.value;
      default:
        return state;
    }
}
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', value});

const store = createStore(reducer);

//dispatch изменение данных в связи с type
document.getElementById('inc').addEventListener('click', () =>{
    store.dispatch(inc())
})
document.getElementById('dec').addEventListener('click', () =>{
  store.dispatch(dec())
})
document.getElementById('rnd').addEventListener('click', () =>{
  const value = Math.floor(Math.random() * 100)
  store.dispatch(rnd(value))
})

//getState Получение данных state
const update = () => {
  document.getElementById('counter').textContent = store.getState();
}
//subscribe подписка на события изменения
store.subscribe(update);


