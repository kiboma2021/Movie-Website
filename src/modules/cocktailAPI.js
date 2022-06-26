class CocktailAPI {
  constructor() {
    this.baseURL = 'www.thecocktaildb.com/api/json/v1/1/';
  }

  receiveData = async () => {
    const response = await fetch(`${this.baseURL}list.php?c=list`, {
      method: 'GET',
      header: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const cocktailCategory = await response.json();
    return cocktailCategory;
  };

}

module.exports = CocktailAPI;
