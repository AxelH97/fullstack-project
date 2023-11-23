const PERSONS_API_URL = "http://localhost:3000/persons";

const personsList = document.getElementById("persons-section");

async function getPersons() {
  let error = null;
  let persons = null;
  try {
    const response = await fetch(PERSONS_API_URL);
    const data = await response.json();
    persons = data;
  } catch (err) {
    error = {
      message: err.message,
      name: err.name,
    };
  } finally {
    return {
      error,
      persons,
    };
  }
}

const renderPersons = async () => {
  const personsInfos = await getPersons();
  const personList = personsInfos.persons.map((person) => {
    return `<div class="person-container"><p>First Name : ${person.firstName}</p><p>Last Name: §{person.lastName}</p><p>Age: ${person.age}</p></div>`;
  });

  const noProfiles = `<div class="no-profiles">No profiles found</div>`;
  personsSection.innerHTML =
    personsInfos.persons.length > 0 ? personList.join("") : noProfiles;
};
