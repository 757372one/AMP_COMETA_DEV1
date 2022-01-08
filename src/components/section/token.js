import React from 'react';
import PieChart from './sub/dounuts';
import { TokenBanners } from './sub/token_banners';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const data = {
  labels: ['PancakeSwap', 'Dev', 'Marketing', 'Advisors'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Token() {
    return (
        
        <div className='container'>
        <p className="bottom-space-sm" />
          <div className='token__section'>
            <div className='token__wrapper'>
              <div className="token__container-card">
                <div className="token__container-cardInfo" style={{height:'200px'}}>
                    <div className='row' style={{display:'flex', flexFlow:'column'}}>
                        <div className="flux" style={{textAlign:'center'}}>THE </div>
                        <div className="neon" style={{textAlign:'center'}}>TOKEN </div>
                    </div>
                    <p className='bottom-space-sm' />
                    <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
                      
                    <img src='images/web/bsc1.png'  width="125px" alt=''  />
                    <a href={'https://bscscan.com/token/0xc79ab5a19dca7f95d78f21084af0151343eb5cf7'}>
                      <h3 style={{fontSize: '10px', margin: '5px 0px 0px 0px', opacity:1}}>0xc79ab5a19dca7f95d78f21084af0151343eb5cf7</h3>
                    </a>
                    <h3 style={{fontSize: '12px', padding: '5px 0px 5px 0px', opacity:1}}>BEP20 standard</h3>
                    </div>
                  </div>
                  <p className='bottom-space-md' />

                  <h3 className="neon" style={{fontSize: '25px', fontFamily: 'neon', marginBottom: '-10px'}}>
                          COMETA
                  </h3>
                  
                <div className="token__container" style={{flexFlow: 'row', width: '300px', marginTop:'0px'}}>
                    <h2 style={{display: 'flex',fontSize: '20px', fontWeight: '900', textAlign: 'end'}}>
                        $BNB&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '35px',fontWeight: '100',textAlign: 'start'}}>
                            &emsp;REWARDS
                    </h2>
                  </div>
                  <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                        $Cometa is on a trajectory to bring DeFi to the masses.  
                        Decentralized finance, which utilizes technologies to remove
                        intermediaries, middlemen, and banks from financial markets, 
                        are complicated systems to enter into.

                        $Cometa primary goal is to make it simple to 
                        start earning passive income without having to understand the backend of the DeFi world.

                        The first step towards achieving that goal was 
                        to create the Cometa token.
                        <br />
                        </h2>
                    </div>
                  </div>
                  <p className='bottom-space-sm' />
                    <TokenBanners />
                  <p className='bottom-space-sm' />

                    <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '25px', fontWeight: '900', textAlign: 'center'}}>
                            THINGS YOU NEED TO KNOW
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'-10px'}}>
                            LIGHTPAPER
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'5px'}}>
                        ↡
                        </h2>
                    </div>
                    <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                      It is an innovative Reflection Token: 
                        one that pays dividends in an already established token instead of our own. 
                        Our dividends are paid out in $BNB, the premier BSC Swap on the market and 
                        a company whose tokens are getting more valuable all the time.
                        The next step is the release of our 3-click App.  

                        The rate of Crypto adoption in the world is growing, 
                        but the percentage of the world’s population who are users is still very small.

                        We have developed an app that is clean, clear and simple to use. 
                        It will revolutionize the DeFi space and foster adoption of crypto in a safe, secure, 
                        easy and rewarding way.  

                        Once the App is released, we will continue to add features to 
                        further empower people and give them control over their financial situations.
                        <br />
                        </h2>
                    </div>
                  </div>
                  <p className='bottom-space-sm' />
                  <div className='token__container'>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                      <h1>5%</h1>
                        <h2 style={{marginTop:'-25px'}}>REWARDS</h2>
                        <p style={{textAlign:'center'}} >3% of every transaction is taken and auto redistributed to all holders. 
                          Hold $COMETA tokens, and keep earning $BNB forever! 2% is sent to the community airdrop programs.
                          </p>
                      </div>
                    </div>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                      <h1>4%</h1>
                        <h2 style={{marginTop:'-25px'}}>POOL</h2>
                        <p style={{textAlign:'center'}}>3% of every transaction is allocated to maintaining a stable liquidity pool
                          keeping your investments sustainable, additional 1% is saved into the COMETA Reserve protocol</p>
                      </div>
                    </div>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                        <h1>5%</h1>
                        <h2 style={{marginTop:'-25px'}}>MARKETING</h2>
                        <p style={{textAlign:'center'}} >5% of every transaction is split allocated to Marketing, Development and design Team.  
                          This allows us to fuel our most ambitious projects in service of further rewarding our community.</p>
                      </div>
                    </div>
                    </div>
                    <p className='bottom-space-sm' />
                    <div className='token__container'>
                      <div className='info__banner-card'>
                        <div className='info__banner-cardInfo'>
                        <h2>Sell Fee</h2>
                          <p style={{textAlign:'center', margin:'-10px 0 10px 0', padding:'15px'}} >An extra 5% fee is applied to all sells at launch of $COMETA Token 
                          and deacreased by 1% with price stabilization untill dropped and set to 2%.
                          This will allow us to reduce swing-trading and break whales’ control.</p>
                        </div>
                      </div>
                    </div>
                  <div className='bottom-space-md' />
                <div className="token__container" style={{flexFlow: 'column', width: '80vw', marginTop:'-10px'}}>
                <div className='row' style={{flexFlow:'column'}}>
                    <h3 style={{fontSize: '15px', textAlign: 'center'}}>$COMETA tax will decrementally drop and settle at:
                    <br /> 5% BUY / 10% SELL
                    <br /><b>2022 Q2</b></h3>

                    <h3 style={{fontSize: '15px', textAlign: 'center'}}>Lower buy tax attracts buy pressure & Higher sell tax encourages hodl.
                    <br/>Less buy tax ≫ Lesser Slippage ≫ Higher Volume ≫ More Holder ≫ Higher Price
                    </h3>
                    </div>
                  </div>
                  <div className='bottom-space-md' />
                  
                  <img src='images/web/comet.png' alt='' width="100px"  />

                  <div className='token__wrapper'>
                  <h3 className="neon" style={{fontSize: '25px', fontFamily: 'neon', margin: '-20px 0px -15px 0px'}}>
                          COMETA
                  </h3>
                      <h3 style={{fontSize: '17px', margin: '10px 0px -35px 0px', opacity:1}}>TOTAL SUPPLY</h3>
                  </div>
                  
                  <div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
                    <h2 style={{display: 'flex',fontSize: '40px', fontWeight: '800', textAlign: 'center'}}>
                    1&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '45px',fontWeight: '500',textAlign: 'center'}}>
                            &emsp;BILLION
                    </h2>
                  </div>
                  <div className='mobile-shrink'>
                  <PieChart
                          data={[{ key: "Burned: 60%", value: 60 }, 
                          { key: "PancakeSwap: 25%", value: 25 },
                          { key: "Listing Reserve: 5%", value: 5 },
                          { key: "Ecosystem/Marketing Fund: 4%", value: 4 },
                          { key: "Development Fund: 3%", value: 3 },
                          { key: "Airdrops/Game-to-Earn: 2%", value: 2 },
                          { key: "Charity Wallet: 1%", value: 1 }]}
                          label="✩ TOKEN ALLOCATION ✩"
                        />
                  </div>
                  <div className='bottom-space-md' />

                  <div className='row'>
                      <h3 style={{fontSize: '17px', margin: '0px 0px 0px 0px', opacity:1}}>slippage ≥ 15%</h3>
                  </div>
                  <div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
                    <h2 style={{display: 'flex',fontSize: '23px', fontWeight: '400', textAlign: 'center'}}>
                    20M max wallet&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '20px',fontWeight: '400',textAlign: 'center'}}>
                            &emsp;1M max sell
                    </h2>
                  </div>
                  <div className='row' style={{flexFlow: 'column', alignItems:'center'}}>
                      <h3 style={{fontSize: '17px', margin: '0px 0px 0px 0px', opacity:1}}>HODL MIN* 200K $COMETA</h3>
                      <h3 style={{fontSize: '15px', margin: '0px 0px 0px 0px', opacity:1}}>*to receive $BNB rewards</h3>
                  </div>
                  <div className='bottom-space-sm' />
                <div className='row'>
                  <div className="tree">
                    <ul>
                      <li>
                        <a href="#">
                          <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                          $COMETA
                          <br /> Tokenomic
                          <br /> Tax
                          </h3>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              5% 
                              <br />Reflection
                              </h3>
                            </a>  
                            <ul>
                              <li>
                              <a href="#">
                                <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  3%
                                <br />$BNB 
                                <br />Redistribution
                                <br />
                                    <a style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}} href="https://bscscan.com/address/0xeeb32426a6ed5b50e8ae8291377ab52d4423f406">
                                    {truncate('0xEeb32426a6Ed5B50e8aE8291377aB52d4423F406', 5)}
                                    </a>
                                </h3>
                              </a>  
                              </li>
                              <li>
                              <a href="#">
                                <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  2% 
                                  <br />Ecosystem 
                                  <br />Rewards
                                  <br />
                                    <a style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}} href="https://bscscan.com/address/0x21ca6FBC424b450e4bf70A6fa0ED15d93FA5b404">
                                    {truncate('0x21ca6FBC424b450e4bf70A6fa0ED15d93FA5b404', 5)}
                                    </a>
                                </h3>
                              </a>  
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                            <h3 style={{fontSize: '7px',fontWeight: '100',textAlign: 'center', marginBottom:'-10px'}}>🔒</h3>
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              4% 
                              <br />Pool
                              </h3>
                            </a>  
                            <ul>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  3% 
                                  <br />Pancakeswap
                                  <br /> Liquidity
                                  <br />
                                    <a style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}} href="https://bscscan.com/address/0xb7dc95cf52d9a9d6edbe3fe7a7dfb52ae492887e">
                                    {truncate('0xb7dc95cf52d9a9d6edbe3fe7a7dfb52ae492887e', 5)}
                                    </a>
                                  </h3>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  1% 
                                  <br />Buyback
                                  <br />Reserve
                                  <br />
                                    <a style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}} href="https://bscscan.com/address/0x2C736ebbb3Ff7FCD979c7D949A8c873501532Be5">
                                    {truncate('0x2C736ebbb3Ff7FCD979c7D949A8c873501532Be5', 5)}
                                    </a>
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              5% 
                              <br />Marketing
                              </h3>
                            </a>  
                            <ul>
                            <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  2% 
                                  <br />Marketing
                                  <br />Fund
                                  <br />
                                    <a style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}} href="https://bscscan.com/address/0xB7Dc95cF52d9A9D6EdBe3fe7A7Dfb52ae492887E">
                                    {truncate('0xB7Dc95cF52d9A9D6EdBe3fe7A7Dfb52ae492887E', 5)}
                                    </a>
                                  </h3>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  3% 
                                  <br />Development
                                  <br />Fund
                                  <br />
                                    <a style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}} href="https://bscscan.com/address/0x458D6186eA832bd972b929a80c26699CE9A20e62">
                                    {truncate('0x458D6186eA832bd972b929a80c26699CE9A20e62', 5)}
                                    </a>
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>    
                <p className="bottom-space-sm" />
                <TokenBanners />
                <p className="bottom-space-sm" />

                    <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '25px', fontWeight: '500', textAlign: 'center', letterSpacing:'8px'}}>
                      WHY CHOOSE COMETA
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'-10px'}}>
                        ✰ WE'RE PROGRAMMED TO HIT $1 ✰
                        <br />HERE'S HOW WE SHINE A BRIGHTER FUTURE
                        </h2>
                    </div>
                    <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                      Dividends: 5% of every buy/sell is taken and redistributed to our holders. Hold $Cometa tokens and earn BNB forever. 
                      A Minimum of 200,000 tokens is required in order to receive rewards.
                      <br /><br />
                      Buy Back / Marketing Wallet: 
                      In the time when our token price drops our team will use the buyback wallet in addition to manual burns to raise and maintain the currency on an upward trend  
                      When is no need for buyback, the funds are being used for marketing.
                      <br /><br />
                      Auto Pay: You don’t need to claim your earned BNB. 
                      It’s automatically sent to your wallet. 
                      Note: in periods of lower volume this may take longer, but you always receive your BNB.
                      <br /><br />
                      Secured: The automatic liquidity system helps create a price floor (stability).
                      Initial Liquidity Provided is locked with DXLock.
                      The smart contract and it's forks being audited by TechRate, and currently onboarding for Certik Audit with 12 months of SkyNet. 
                      Our expereinced crypto team and code cosmonauts will ensure the continuos growth of this project
                        <br />
                        </h2>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                        
                    </div>
                    <div className='col'>
                        <div className='btn'>
                          <a style={{textDecoration:'none'}} href="https://discord.gg/GRQrmvZY8y">Discord</a>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='btn'>
                          <a style={{textDecoration:'none'}} href="https://t.me/cometaclub">Telegram</a>
                        </div>
                    </div>
                  </div>
                  <div className='bottom-space-sm' />
                  <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '25px', fontWeight: '500', textAlign: 'center', letterSpacing:'8px'}}>
                      JOIN OUR COMMUNITY 
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'-10px'}}>
                        ✰ FOLLOW OUR SOCIAL CHANNELS ✰
                        </h2>
                    </div>

              </div>
            </div>
          </div>
        </div>
    );
}