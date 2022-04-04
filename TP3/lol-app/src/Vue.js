import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToutesCartes from './ToutesCartes';
import CartesChoisies from './CartesChoisies';


class Vue extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          'cardList' : {},
          'choosedCardList' : {},
          'canValidate': false,
          'deckMessage': 'MON DECK'
      };
    
  }

  componentDidMount() {
    // GET request using fetch with set headers
    const resultat = {}
    fetch('http://localhost:3001/cards')
        .then((data) =>{return data.json()})
        .then(data =>{
          data = data.sort((championA, championB) =>{
              return (championA.name > championB.name)
          })
          for (const character of data) {
            resultat[character['_id']] = character 
        }
        this.setState({'cardList':resultat})
    })
        
  }

 


  handleUpdate = (p_cards, p_choosed) => {
    if (this.state.deckMessage !== 'DECK VALIDÉ !') {
      if(Object.keys(p_choosed).length === 20){
            this.setState({'cardList':p_cards, 'choosedCardList': p_choosed, 'canValidate': true})
        } else {
            this.setState({'cardList':p_cards, 'choosedCardList': p_choosed, 'canValidate': false})
        } 
    }
  }

  sendDeck = () => {
    this.setState({'deckMessage': 'DECK VALIDÉ !'})
    let output = ""
    Object.keys(this.state.choosedCardList).map(key => {
        output += this.state.choosedCardList[key].name + "\n"
    })
    console.log(output)
  }



  render() {
    let display_cards = ""
    let size_deck  = 6
    let hidden = ""
    if (this.state.deckMessage === 'DECK VALIDÉ !') {
        display_cards = "d-none"
        size_deck  = 12
        hidden = 'hidden'
    }
    return (
            <section className="container-fluid pb-5">
                <div className="row">
                    <div className={"col-md-6 " + display_cards}>
                        <div className='container-fluid containers-all-cards pb-4'>
                            <div className="row justify-content-around">
                                <div className="text-white"> <h1> CHAMPIONS DISPONIBLES </h1></div>
                                <ToutesCartes updateState={this.handleUpdate} cards={this.state.cardList} choosed={this.state.choosedCardList}/>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-" + size_deck}>
                        <div className='container-fluid h-100 containers-choosed-cards pb-4'>
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h1 class="card-title mb-0 text-white">{this.state.deckMessage}</h1>
                                <button type="button" class="btn btn-primary" disabled={!this.state.canValidate} hidden={hidden} onClick={this.sendDeck}> Let's go ! </button>
                            </div>
                            <div className="row justify-content-around">
                                <CartesChoisies updateState={this.handleUpdate} cards={this.state.cardList} choosed={this.state.choosedCardList} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    
}

export default Vue