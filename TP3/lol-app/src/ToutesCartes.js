import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AfficheCartes from './AfficheCartes';


class ToutesCartes extends React.Component{
    constructor(props) {
      super(props);
     
    
  }


  render() {
    const liste  = this.props.cards
    return  Object.keys(liste).map((key, index) => { 
                return <div key={key} onClick={() => { 
                                            if (Object.keys(this.props.choosed).length < 20){
                                                this.props.choosed[key] = liste[key]; 
                                                delete this.props.cards[key]; 
                                                this.props.updateState(this.props.cards, this.props.choosed)
                                            }
                                        }
                                    } className="col mt-3 cardReact"> <AfficheCartes data={liste[key]} /> </div>
            })
                
}




}

export default ToutesCartes