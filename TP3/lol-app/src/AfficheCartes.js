import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToutesCartes from './ToutesCartes';

class AfficheCartes extends React.Component{
    constructor(props) {
      super(props);
     
    
  }

  render(){
    const adresse = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.data.key+"_0.jpg"

    return(
        <div className="card-before card border-1 bg-black hover-overlay hover-zoom" style={{width: '10rem', height:'14rem'}}>
            <img src={adresse} className="card-img-top" />
            <div className="bg-dark text-secondary panel-footer text-center">
                        <p className='bg-black'>{this.props.data.name}</p>
                        <span className='text-white'> Attack :     {this.props.data.info.attack}     </span><br></br>
                        <span className='text-white'> Defense :    {this.props.data.info.defense}    </span><br></br>
                        <span className='text-white'> Difficulty : {this.props.data.info.difficulty} </span><br></br>
                        <span className='text-white'> Magic :      {this.props.data.info.magic}      </span>
                    </div>
                </div>

    )
   
  }


}

export default AfficheCartes;