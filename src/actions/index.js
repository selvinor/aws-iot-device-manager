export const addToCounter = (store, amount) => {
  console.log('addToCounter: ', amount, ' + ', store.state.counter);
  const counter = store.state.counter + amount;
  store.setState({ counter });
  console.log('store.state.counter updated: ', store.state.counter)
};
export const showPlantDetail = (store, key) => {
  const plantDetail = store.state.activePlants.filter(plant => {
    if (plant.key !== key) return true;
  });
  store.setState({ plantDetail });
};
export const setPlantsActive = (store, plant) => {
  const activePlants = [...store.state.activePlants, plant];
  store.setState({ activePlants });
 };

export const removeActivePlant = (store, plantkey) => {
   const activePlants = store.state.activePlants.filter(plant => {
    if (plant.key !== plantkey) {
      return true;
    } 
    
  });
  store.setState({ activePlants });
};
