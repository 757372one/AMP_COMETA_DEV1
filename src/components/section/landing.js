
import React from 'react';



export function Landing() {

  return (
    <div className="container">
      <p className="bottom-space" style={{marginBottom:'200px'}} />
      <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '30px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'10px'}}>
                            WHEN YOU <i>REALLY </i><b>WANT</b> SOMETHING
                        </h2>
                        <h2 style={{fontSize: '20px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'8px'}}>
                            ALL THE <b>UNIVERSE</b> COLLABORATES
                        </h2>
                        <h2 style={{fontSize: '13px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'6px'}}>
                            IN HELPING YOU <b><i>ACHIVE</i></b> IT . . .
                        </h2>
                        <h2 style={{fontSize: '8px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'6px'}}>
                            FIND OUT HOW
                        </h2>
                    </div>
        <div className='row'>
          <p className="bottom-space-sm" />
          <div className='float-div'>
            <p style={{fontSize: '20px', margin: '10px 0px 0px 0px', opacity:1}}>↡</p>
          </div>
        </div>
                    
        <p className="bottom-space" style={{marginBottom:'400px'}} />
        <p className="bottom-space-sm" />
            <div className="row">
                <div className='col'>
                    <p className="bottom-space-md" />
                    <h3 style={{fontSize: '15px', textAlign: 'justify'}}>
                      A club. A tribe. We are fixated on one goal… Don't work for money, let the money work for you.
                      Join our community-governed platform focused on Staking, Lending, Governance, and Decentralized Launchpad services.
                      The objective is to give financial control back to the people, so that as a collective, they may store and grow their wealth together. 
                      $Cometa aims to leverage crowd wisdom to create a community-governed, transparent, and decentralized ecosystem for web 3.0.
                      $Cometa is now a multi-chain ecosystem offering services on Ethereum, Binance Smart Chain, and Polygon. Moving forward, it will be available on HECO, Solana, RioChain, and more!
                    </h3>
                </div>
                <div className="col">
                  <div className='float-div'>
                    <img src="images/upsidedown.gif" width="250px" alt="" style={{marginLeft:'-50px'}} />
                  </div>
                </div>
            </div>
            <div className="col">
              <h3 style={{fontSize: '15px', textAlign:'center'}}>Blockchain Agnostic For Multi-Chain Support</h3>
            </div>
            <div className='col'>
              <div className='img-zoom'>
                  <img src="images/web/multichains.png" width="250px" alt="" style={{marginTop:'-50px'}} />
              </div>
            </div>
        <p className="bottom-space-sm" />
    </div>
  );
}