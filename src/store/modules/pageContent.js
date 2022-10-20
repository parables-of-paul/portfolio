const state = {
  pageContent: []
};

const getters = {
  pageContent: (state) => state.page
};

const actions = {
  async pageContentFetched({ commit }){
    await fetch('https://api-eu-west-2.hygraph.com/v2/cl8yo9jag0cgh01ur9ltf5cdw/master', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: `{
          pageContent(where: {id: "cl976s4za03zf0bjq78w98yay"}) {
            pageTextImage {
              sectionBody {
                text
              }
              sectionImage {
                url
              }
            }
          }
        }`
      })
    })
    .then(res => res.json())
    .then(data => {
      commit('pageContentFetched', data.data);
    })
  }
};

const mutations = {
  pageContentFetched: (state, pageContent) => {
    (state.pageContent = pageContent.page)
  }
};

export default {
    state,
    getters,
    actions,
    mutations
}