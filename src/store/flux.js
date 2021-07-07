const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token : null,
      planets : null,
      done : null

    },
    actions: {
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== "" && token !== undefined) setStore({ token : token });
      },

      login: async (name, password,history) => {
        
        const opt = {
          method: "POST",
          body: JSON.stringify({
            name: name,
            password: password
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
        try
        {
          const response = await fetch("http://127.0.0.1:5000/login", opt)
          if (response.status !== 200)
          {

            alert("There has been some error");
            return false;
          }
          const data = await response.json();
          console.log("This came from DB " + data.token)
          if (data.token) history.push("/dashboard")
          if (data.token) sessionStorage.setItem("token", data.token)
          if (data.token) sessionStorage.setItem("done", true)
          if (data.token) setStore({token : data.token})
          if (data.token) setStore({done : true})
          

        }
        catch(error){
          console.log("There has been an error login in");
        }
      },
      getPlanets: () => {
        const store = getStore();
        const opts = {
          headers: {
            "Authorization": "Bearer " + store.token
          }
        }
        fetch("http://127.0.0.1:5000/api/planets", opts)
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
            setStore({ planets: data })})
          .catch(error => console.log("Error loading message from backend", error))
      },

      logout: () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("done");
        console.log("Log out");
        setStore({ token: null });
        setStore({ done: null });
        setStore({ planets: null });
      }
     
    }


  };
};

export default getState;
