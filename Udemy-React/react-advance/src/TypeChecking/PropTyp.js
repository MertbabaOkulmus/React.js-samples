import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Renk=(props)=>{
    console.log(props.renkler)
   return (
    //<div style={{background:`#${props.renk}`}}>Renk # {props.renk}</div>
      
      <div>Renklerim</div>         
    
   )
}

Renk.propTypes={
   renk:PropTypes.string //Renk companentine e props olarak gelen renk obejesinin mecburi olarak geleceği değişken türünü belirliyoruz

}

//herhangi bir renk porpsu geçilmez ise defaultProps ile varsayılan renk ayarı yapabiliriz
Renk.defaultProps={
    renk:798//herhnagi bir renk propsu dönmez ise seçili olarak bu döner
}


Renk.propTypes={
    renkler:PropTypes.arrayOf(PropTypes.string)
}


const renkler=['897','562','741','357']
export default class PropTyp extends Component {
    render() {
        return (
            <div>
                {/* <Renk  renk="8965"/> */}
                <Renk renkler={renkler} />
            </div>
        )
    }
}
