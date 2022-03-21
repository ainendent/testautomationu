//assume fetchDataOverApi returns data from external api and function is called from another file
const fetchDataOverApi = require('./fetchData.js');

@test
public void ainendent(){

}

@test
public void ainendent(){

}

//non async example
test('the user data for user 1', () => {
  const data = fetchDataOverApi();
  expect(data).toBe('John');
});