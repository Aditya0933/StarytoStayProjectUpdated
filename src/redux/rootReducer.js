import { combineReducers } from 'redux'
import { userReducer } from './reducer/userReducer'
import { userAnimalReducer } from './reducer/userAnimalReducer'
import { userInjuredAnimalReducer } from './reducer/userInjuredAnimalReducer'
import { animalReducer } from './reducer/animalReducer'
import { animalDetailReducer } from './reducer/animalDetailReducer'
import { injuredAnimalReducer } from './reducer/injuredAnimalReducer'
import { injuredAnimalDetailReducer } from './reducer/injuredAnimalDetailReducer'
import { loadingReducer } from './reducer/loadingReducer'


const rootReducer = combineReducers({
  user: userReducer,
  userAnimal: userAnimalReducer,
  userInjuredAnimal: userInjuredAnimalReducer,
  animal: animalReducer,
  animalDetail: animalDetailReducer,
  injuredAnimal: injuredAnimalReducer,
  injuredAnimalDetail: injuredAnimalDetailReducer,
  load: loadingReducer
})

export default rootReducer
