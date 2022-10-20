const state = {
        projectData: []
    };
const getters = {
    projectDataGetter: (state) => state.projects
    };
const actions = {
    async fetchProjectData({ commit }){
        await fetch('https://api-eu-west-2.hygraph.com/v2/cl8yo9jag0cgh01ur9ltf5cdw/master', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `
                {
                    projects {
                      projectTitle
                      projectBulletPoints
                      projectLink
                      projectScreens {
                        url
                        handle
                        fileName
                      }
                      projectDescription {
                        text
                        raw
                      }
                      projectBrandColours {
                        hex
                        rgba {
                          a
                          b
                          g
                          r
                        }
                      }
                      projectLogo {
                        url
                      }
                      id
                    }
                  }
                    `
                })
            })
            .then(res => res.json())
            .then(data => {
                commit('projectDataFetched', data.data);
            })
        }
    };
    const mutations = {
        projectDataFetched: (state, projectData) => {
            (state.projects = projectData.projects)
        }
    };

export default {
    state,
    getters,
    actions,
    mutations
}