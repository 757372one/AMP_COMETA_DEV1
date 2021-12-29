
import React  from 'react';
import { TokenBanners } from './sub/token_banners';
import { Partners } from './sub/partners';
export function Footer() {

  return (
<div className='footer'>
    <p className='bottom-space' />
    <TokenBanners />
    <div className='row' style={{'flexFlow':'column'}}>
        
        <div className='col'>
            <Partners />
        </div>
    </div>
    <div className='row'>
        <div className='col'>
            <h2 style={{fontSize: '20px', fontWeight: '400', textAlign: 'center', margin:'-10px'}}> CONNECT WITH US </h2>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
            <ul>
            <li><a href="https://www.twitter.com/cometaclub">Twitter</a></li>
                <li><a href="https://discord.gg/GRQrmvZY8y">Discord</a></li>
                <li><a href="https://t.me/cometaclub">Telegram</a></li>
                <li><a href="https://github.com/cometaclub">Source Code</a></li>
                <li>
                    <p style={{fontSize: '20px', margin: '-5px 0px 0px 0px', opacity:1}}>☄️</p>
                </li>
            </ul>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
            <p style={{display: 'flex',fontSize: '14px', textAlign: 'center'}}> © Cometa Club & Cosmosapiens. All Rights Reserved.</p>
        </div>
    </div>
    <p className='bottom-space-md' />
    <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '10px', textAlign: 'center'}}>
                      Trading cryptocurrencies carries a high level of risk, and may not be suitable for all investors. 
                Before deciding to trade cryptocurrency you should carefully consider your investment objectives, level of experience, and risk appetite.
                The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest
                 money that you cannot afford to lose. Any opinions, news, research, analyses, prices, or other information contained on this website 
                 is provided as general market commentary, and does not constitute investment advice. The Cometa Club team and its affiliates will not 
                 accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or 
                 indirectly from use of or reliance on such information. All opinions expressed on this site are owned by the respective 
                 writer and should never be considered as advice in any form. The Cometa Club team and its affiliates makes no representation or 
                 warranties as to the accuracy and or timelines of the information contained herein.
                 A qualified professional should be consulted before making any financial decisions.
                        </h2>
                    </div>
                  </div>
  </div>
  );
}