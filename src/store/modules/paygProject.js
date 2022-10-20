const state = {
    paygProject: []
};

const getters = {
    paygProjectGetter: (state) => state.paygProject
};

const actions = {
    async fetchPAYGData({ commit }){
        await fetch('https://api-eu-west-2.hygraph.com/v2/cl8yo9jag0cgh01ur9ltf5cdw/master', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `
                {
                    paygProject(where: {id: "cl9fyenfi36ne0al8acwmo1q7"}) {
                      paygClient {
                        paygClientName
                        paygLogo {
                          url
                        }
                      }
                    }
                  }
                    `
                })
            })
            .then(res => res.json())
            .then(data => {
                commit('paygProjectsFetched', data.data);
            })
        }
};

const mutations = {
    paygProjectsFetched: (state, paygProjects) => {
        (state.paygProject = paygProjects)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}