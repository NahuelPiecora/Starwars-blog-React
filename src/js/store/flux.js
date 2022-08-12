const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      ships: [],
      vehicles: [],
			favorites: [],
			person: [],
			planet: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getAllPeople: async () => {
        const response = await fetch("https://swapi.dev/api/people");
        const payload = await response.json();
        setStore({ people: payload.results });
      },
      getAllPlanets: async () => {
        const response = await fetch("https://www.swapi.tech/api/planets");
        const payload = await response.json();
        setStore({ planets: payload.results });
      },

      getAllShips: async () => {
        const response = await fetch("https://www.swapi.tech/api/starships");
        const payload = await response.json();
        setStore({ ships: payload.results });
      },
    },
  };
};

export default getState;
