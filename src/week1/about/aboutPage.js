import React,{Component} from 'react' ;

export default class AboutPage extends Component{

    render(){
        return(
          <div>
              <h1>About Page!!!</h1>
              <p>This application uses the following teachs :</p>
              <ul>
                  <li>React Js</li>
                  <li>Flux</li>
                  <li>Node Js</li>
                  <li>Webpack</li>
              </ul>
          </div>  
        );
    };

}