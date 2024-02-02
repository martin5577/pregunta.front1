class PreguntaService{
    baseUrl = import.meta.env.VITE_API_URL
    baseController = "Pregunta"

    async GetPreguntas () {
        let options = {
            method: 'GET',
            headers:{
              "Content-Type": "application/json",
            },
            credentials: 'include',
          };

        let response = null;
        try {
            const response =await fetch(`${this.baseUrl}${this.baseController}/GetAll`, options)
            if(response.status !== 200){
              localStorage.removeItem("loggedIn");
            }
            const preguntas = await response.json();
            return preguntas;
        } catch (error) {
            console.log(error);
            return response;
        }
        
    }

    async GetPreguntasForViewer () {
        let options = {
            method: 'GET',
            headers:{
              "Content-Type": "application/json",
            }
          };

        let response = null;
        try {
            const response =await fetch(`${this.baseUrl}${this.baseController}/GetForViewer`, options)
            const preguntas = await response.json();
            return preguntas;
        } catch (error) {
            console.log(error);
            return response;
        }
        
    }

    async AddPregunta (data) {
        let options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              "Content-Type": "application/json",
            },
            credentials: "include"
          };

        let response = null;
        try {
            const response = await fetch(`${this.baseUrl}${this.baseController}/Create`, options)
            if(response.status !== 200){
              localStorage.removeItem("loggedIn");
            }
            const pregunta = await response.json();
            return pregunta;
        }
        catch (error) {
            console.log(error);
            return response;
        }
    }
}

export {PreguntaService}