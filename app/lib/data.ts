export async function fetchHouses() {
  try {
    const data = await fetch('https://anapioficeandfire.com/api/houses/');
    const json = await data.json();

    return json;
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function fetchMember(url: string) {
  try {
    const data = await fetch(url);
    const json = await data.json();

    return json;
  } catch (error) {
    console.error('Database Error:', error);
  }
}
