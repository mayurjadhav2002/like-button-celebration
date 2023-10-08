import React, { Suspense, useState } from 'react';
import party from "party-js";
import Loading from '../Utils/Loading';

function CustomButton(props) {
  const [customButton, setCustomButton] = useState(props.Active & true);
  party.resolvableShapes["customShape"] = props.Image ? `<img src=${props.Image} width='24' height='24'}/> ` : ['circle', 'square'];

  const partyFun = (e) => {
    setCustomButton(!customButton);
    party.confetti(e, {
      shapes: props.Image ? ['customShape'] : ['square', 'circle', "roundedSquare", "roundedRectangle"],
      speed: props.Speed ? party.variation.range(props.Speed.Min, props.Speed.Max) : party.variation.range(100, 400),
      spread: props.Spread ? props.Spread : 50,
      count: props.Count ? party.variation.range(props.Count.Min, props.Count.Max) : party.variation.range(20, 50),
    });
  };

  const customButtonStyle = {
    backgroundColor: 'transparent',
    zIndex: 5,
    position: 'relative',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const overflowDivStyle = {
    opacity: 0.5,
    width: '100%',
    position: 'absolute',
    height: '100%',
    marginLeft: '-6px',
    marginTop: '-1px',
    zIndex: 3,
  };

  const svgStyle = {
    zIndex: 2,
    textOverflow: 'hidden',
    margin: 'auto',
    transition: '0.9s',
    transitionProperty: 'fill', // To specify the property separately
  };

  const biStyle = {
    fill: 'blue',
  };

  const svgFillStyle = {
    fill: 'red',
  };

  const customButtonHoverStyle = {
    border: '1px solid gray',
    padding: '1rem',
    paddingInline: '2rem',
    borderRadius: '1rem',
    background: '#e4e6ff',
  };

  return (
    <Suspense fallback={<Loading loader={'spinner'} />}>
      <button
        style={customButtonStyle}
      >
        <div style={overflowDivStyle} onClick={e => partyFun(e.target)}></div>

        {customButton && props.BeforeClick ?
          props.AfterClick
          :
          props.BeforeClick

        }
      </button>
    </Suspense>
  );
}

export default CustomButton;
