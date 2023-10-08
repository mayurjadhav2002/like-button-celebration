import React, { Suspense, useState } from 'react';
import party from "party-js";
import Loading from '../Utils/Loading';

function HeartLike(props) {
  const [like, setLike] = useState(props.Active & true);
  party.resolvableShapes["customShape"] = props.Image ? `<img src=${props.Image} width='24' height='24'}/> ` : ['circle', 'square'];

  const partyFun = (e) => {
    setLike(!like);
    party.confetti(e, {
      shapes: props.Image ? ['customShape'] : ['square', 'circle', "roundedSquare", "roundedRectangle"],
      speed: props.Speed ? party.variation.range(props.Speed.Min, props.Speed.Max) : party.variation.range(100, 400),
      spread: props.Spread ? props.Spread : 50,
      count: props.Count ? party.variation.range(props.Count.Min, props.Count.Max) : party.variation.range(20, 50),
    });
  };

  const buttonStyle = {
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
    fill: 'red',
  };

  const svgLikeStyle = {
    fill: 'red',
  };

  const svgHover = {
    filter: 'drop-shadow(0 0 30px blue)', // Filter effect on hover

  };

  return (
    <Suspense fallback={<Loading loader={'spinner'} />}>
      <button
        style={buttonStyle}
        className='btn btn_heartlike'
      >
        <div style={overflowDivStyle} onClick={e => partyFun(e.target)} ></div>

        {like ?
          <svg xmlns="http://www.w3.org/2000/svg"
          width={props.IconWidth ? props.IconWidth : '24'} height={props.IconHeight?props.IconHeight : '24'}
            fill="currentColor" 
            style={svgLikeStyle}
            viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width={props.IconWidth ? props.IconWidth : '24'} height={props.IconHeight?props.IconHeight : '24'}
            style={svgStyle}
          ><path d="m12 20.703.343.667a.748.748 0 0 1-.686 0l-.003-.002-.007-.003-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013-.007.003-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4Z"></path></svg>

          
        
        }
      </button>
    </Suspense>
  );
}

export default HeartLike;
