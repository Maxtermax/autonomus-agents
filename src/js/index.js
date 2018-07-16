import VectorsBehavior from './example-1/index.js';
import EntitySenoidalMovement from './example-2/index.js';
import EntityApplyForces from './example-3/index.js';

class Router {
  constructor(routes) {
    this.routes = [...routes];
    this.currentPage = '';
    window.addEventListener("load", this.handleRoute.bind(this));
    window.addEventListener('hashchange', this.handleRoute.bind(this));
  }    

  handleRoute(e) {
    let App = document.getElementById('App');
    let route = this.routes.find(element => window.location.hash === element.page);
    if(route) {
      this.currentPage = route.view;
      this.fetchView(route);
    } else {
      App.innerHTML = `<div>NOT FOUND</div>`;
    }
  }

  async fetchView(route) {
    let App = document.getElementById('App');
    try {
      let response = await fetch(`/pages/${this.currentPage}`);
      response.text().then(text => {
        App.innerHTML = text;
        route.init();
      });
    } catch(error) {
      console.log(error);
    }
  }
}


let pages = new Router([
  {
    page: '#example-1',
    view: `example-1.html`,
    init: () => {
      VectorsBehavior();
    }
  },
  { 
    page: '#example-2', 
    view: `example-2.html`,
    init: () => {     
      EntitySenoidalMovement();
    }
  },
  {
    page: '#example-3',
    view: `example-3.html`,
    init: () => {
      EntityApplyForces();
    }    
  }
])