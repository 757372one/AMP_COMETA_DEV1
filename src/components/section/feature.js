import React from 'react';

export function Features() {
  return (
      <div className='container'>
          <p className="bottom-space-md" />
          <h3 className="neon" style={{fontSize: '25px', fontFamily: 'neon', marginBottom: '0px'}}>
                          GIVING BACK
            </h3>
            <div className="row">
                <div className='col' style={{marginTop:'5px', marginLeft:'0px', display:'block'}}>
                    <div className="game-card" style={{width:'300px'}}>
                        <img src="images/web/handshake.gif" alt="City" className="game-image" />
                        <div className="game-text" style={{fontSize:'2rem'}}>
                        <p />
                        </div>
                        <p style={{textAlign:'center'}} >Focusing on the power of the community first.
                        That means to collectively achieve policy outcomes that suit the needs of <b><i>All</i></b> involved.
                        </p>
                    </div>
                </div>
                <div className='col' style={{marginTop:'5px', marginLeft:'0px', display:'block'}}>
                    <div className="game-card" style={{width:'300px'}}>
                        <img src="images/web/ufo.gif" alt="City" className="game-image" style={{objectFit:'inherit'}} />
                        <div className="game-text" style={{fontSize:'2rem'}}>
                            AIRDROPS
                        </div>
                        <p style={{textAlign:'center'}} >
                            This is what it's all about. Getting free money and art dropped into your wallets. 
                            This is why we reserved a nice chunck for you to participate in.
                        </p>
                    </div>
                </div>
                <div className='col' style={{marginTop:'5px', marginLeft:'0px', display:'block'}}>
                    <div className="game-card" style={{width:'300px'}}>
                        <img src="images/web/give_back.gif" alt="City" className="game-image" style={{objectFit:'scale-down'}}/>
                        <div className="game-text" style={{fontSize:'2rem'}}>
                            <p />
                        </div>
                        <p style={{textAlign:'center'}} >
                            Not leaving others behind is the foundation of our civilization. 
                            Helping community-picked charities. Open-source funding. 
                        </p>
                    </div>
                </div>
            </div>
      </div>
  );
}