import React from 'react';

export function Partners() {
  return (
      <div className='container'>
        <p className='bottom-space-md' />
        <p style={{'fontSize':'13px', fontFamily:'helvetica', marginBottom:'-20px'}}>PARTNERS & ADVISORS</p>
        <div to='' className='row'>
            <div className='partner__container-card'>
                <img src='images/web/3dmeta_logo.png'  width="225px" alt=''  />
            </div>
            <div className='partner__container-card' >
                <img src='images/web/blockchained_logo.png' width="225px" alt=''  />
            </div>
            <div className='partner__container-card'>
                <img src='images/web/artecture_logo.png'  width="225px" alt=''  />
            </div>
        </div>
        <p className='bottom-space-sm' />
      </div>
  );
}