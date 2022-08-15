export async function getAllPeople() {
  const response = await fetch("https://www.swapi.tech/api/people");
  const payload = await response.json();
  return payload.results;
}

export async function getPerson(n) {
  const response = await fetch("https://www.swapi.tech/api/people/" + n);
  const payload = await response.json();
  return payload.result.properties;
}
export async function getAllPlanets() {
  const response = await fetch("https://www.swapi.tech/api/planets");
  const payload = await response.json();
  return payload.results;
}


export async function getPlanet(n) {
  const response = await fetch("https://www.swapi.tech/api/planets/" + n);
  const payload = await response.json();
  return payload.result.properties;
}


export async function getAllShips() {
  const response = await fetch("https://www.swapi.tech/api/starships");
  const payload = await response.json();
  return payload.results;
}
