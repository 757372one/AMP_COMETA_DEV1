import React, { useEffect, useState } from "react";
import { Discord, Twitter } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import example from '../../assets/example.gif';


export function Cosmosapiens() {

    const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    let costValue = blockchain.web3.utils.toWei((CONFIG.DISPLAY_COST * mintAmount).toString(), "ether")
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: costValue,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, You have a ${CONFIG.NFT_NAME} citizen! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };


  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };


  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
      <div className='container'>
        <div className='token__section'>
          <div className='token__wrapper'>
          <p className="bottom-space-sm" />        
        <p className="bottom-space" />
          
            <div className="token__container-card">
              <div className="token__container-cardInfo">
                <div className='row' style={{display:'flex'}}>
                    <div className="flux">THE </div>
                    <div className="neon">NFT </div>
                </div>
                <div className="row">
                <h3 className="neon" style={{fontSize: '25px', fontFamily: 'neon', textAlign:'start'}}>
                        Cosmosapiens
                    </h3>
                </div>
                <div className='row' style={{display:'flex', flexDirection:'column'}}>
                <section id="slideshow">
                  <div className="entire-content">
                    <div className="content-carrousel">
                      <figure className="shadow"><img src="images/example.gif"/></figure>
                      <figure className="shadow"><img src="images/example2.gif"/></figure>
                      <figure className="shadow"><img src="images/example3.gif"/></figure>
                      <figure className="shadow"><img src="images/example.gif"/></figure>
                      <figure className="shadow"><img src="images/example2.gif"/></figure>
                      <figure className="shadow"><img src="images/example3.gif"/></figure>
                      <figure className="shadow"><img src="images/example.gif"/></figure>
                      <figure className="shadow"><img src="images/example2.gif"/></figure>
                      <figure className="shadow"><img src="images/example3.gif"/></figure>
                      <figure className="shadow"><img src="images/example.gif"/></figure>
                    </div>
                  </div>
            </section>
            <div className="img-zoom">
                <div className="w">
                  <div className="warhol a"></div>
                  <div className="warhol b"></div>
                  <div className="warhol c"></div>
                  <div className="warhol d"></div>
              </div>
              </div>
            </div>
            <p className="bottom-space-sm" />
            <h3 style={{display: 'flex',fontSize: '17px', textAlign: 'center', margin:'15px', letterSpacing:'3px'}}><b><i>N</i></b>o&emsp;<b><i>F</i></b>ucking&emsp;<b><i>T</i></b>hanks</h3>
            <div className="token__container">
                    <div className='token__container-section' >
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                      OK, get it, WTF are those anyway? They are basically free just pay the fee.
                      Your passport to the sickest clubhouse on the blockchained metaverse. 
                      All Cosmosapiens NFT holders will receave an early-bird status with early investor privilages and giveaways,
                      access to our metaverse virtual COMETA PODs, in-house designed COMETA NFT singed
                      on Ethereum Blockchain and hosted on the distributed database. - own a VR ETH-estate on the Metaverse.
                      <br />
                      <br />
                      Cosmosapiens are the main game avatars and are the result of human hand-drawn & code work, 
                      each is unique and programmatically generated from over 150+ possible traits, 
                      including expression, headwear, clothing, and more. 
                      All cosmosapiens are dope, but some are rarer than others. 
                      The cosmosapiens are stored as ERC-721 tokens on the blockchain and hosted on IPFS. 
                      (See Record and Proof.) Purchasing 1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}{CONFIG.NETWORK.SYMBOL}.
                      To access members-only areas such as THE COMETA, 
                      Cosmosapiens will need to be signed into their Metamask Wallet.
                      </h2>
                    </div>
                  </div>
                  <h3 style={{display: 'flex',fontSize: '17px', textAlign: 'center', letterSpacing:'3px'}}><b>The Game Avatar</b></h3>
            <div className="token__container">
                    <div className='token__container-section' >
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                      Drought, dropped oxygen levels and crop disease made Earth no longer a suitable home.
                    Earth's civilization starts to regress into a failing society, humanity is facing extinction.
                    Our only way out is up. Unknown artificial intelligence opened up a wormhole in our near pproximity.
                    A space-time bridge leading to distant galaxies - our last chance to find a habitable exoplanet.
                    A flock of 10 000 human embryos called the cosmosapiens are sent on an exploratory mission through the wormhole 
                    in search of a new home.
                      </h2>
                    </div>
                  </div>
                  <div className="token__container">
                  <div className="token__wrapper">
                  <h2 style={{marginBottom:'-15px'}}>♛</h2>
                      <img src='images/web/ethereum.png'  width="150px" style={{margin:'15px'}} alt=''  />
                    <img src='images/web/crows.gif'  width="500px" style={{padding:'1px', opacity:'0.75'}} alt=''  />

                    </div>
                  </div>
              <div className='row'>
                
                <a href={'/'}>
                </a>
              </div>
              <div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
                    <h2 style={{display: 'flex',fontSize: '20px', fontWeight: '900', textAlign: 'center'}}>
                    {data.totalSupply}&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '35px',fontWeight: '100',textAlign: 'center'}}>
                            &emsp;{CONFIG.MAX_SUPPLY} MAX.
                    </h2>
                  </div>
              </div>
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <div className='text-title' style={{
                  textAlign: "center",
                  fontSize: 50,
                  fontWeight: "bold",
                  color: "var(--accent-text)",
                }}>
                    The sale has ended.
                  </div>
                  <div className='text-description'
                    style={{ textAlign: "center", color: "var(--accent-text)" }}
                  >
                    You can still find {CONFIG.NFT_NAME} on
                  </div>
                  <p className="bottom-space-xsm" />
                  <a className='styled-link' target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </a>
                </>
              ) : (
                <>
                  <div className='token__wrapper'>
                   <h3> 1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}{CONFIG.NETWORK.SYMBOL} </h3>
                   <h3 style={{margin:'-10px'}}>excluding gas fees.</h3>
                  </div>
                  <p className="bottom-space-xsm" />
                  {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                    <div className='token__wrapper'>
                      <h3>
                        Launching on the {CONFIG.NETWORK.NAME} network
                      </h3>
                      {blockchain.errorMsg !== "" ? (
                        <>
                          <p className="bottom-space-xsm" />
                          <div className='text-description'
                            style={{
                              textAlign: "center",
                              color: "var(--accent-text)",
                            }}
                          >
                            <h3>{blockchain.errorMsg}...Collection is not yet Live</h3>
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : (
                    <>
                      <div className='text-description'
                      >
                        <h3>{feedback}</h3>
                      </div>
                      <p className="bottom-space-xsm" />
                      <div className='container' style={{
                            flexDirection: "row",
                          }}>
                        <div className='btn' 
                          style={{ lineHeight: 0.4 }}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </div>
                        <p className="bottom-space-xsm" />
                        <h3>{mintAmount}</h3>
                        <p className="bottom-space-xsm" />
                        <div className='btn'
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </div>
                      </div>
                      <div className='container' style={{
                            flexDirection: "row",
                          }}>
                        <div className='btn'
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}>
                          {claimingNft ? "BUSY" : "BUY"}
                        </div>
                      </div>
                      <p className="bottom-space-xsm" />
                      <h3> Once you make the purchase, you cannot undo this action.</h3>
                    </>
                    
                  )}
                </>
              )}
              <div className='token__wrapper'>
              <p className="bottom-space-xsm" />
                <p style={{alignItems:'center'}}>
                  <img src='images/web/blue_check.png'  width="15px" style={{marginBottom:'-3px'}} alt=''  />
                  &emsp;Coming Soon to:
                </p>
                <div className="img-zoom">
                <img src='images/web/opensea.png'  width="250px" style={{margin:'0px'}} alt=''  />
                </div>
              </div>
              <div className='token__wrapper'>
              <p className="bottom-space-sm" />
              <h3 style={{fontWeight:'300', fontSize: '17px', textAlign: 'center', letterSpacing:'5px'}}>GIVE ME FREE MONEY</h3>
                <h3 style={{alignItems:'center', fontSize: '14px', marginTop:'-5px'}}>
                  All Cosmosapien Holders will automatically enter giveaways for:
                  <br /><b>⋘ K9 Cosmosapien Doge Fren ⋙</b>
                  <br />Companion and Protector NFTs
                  <br /> ＋
                  <br /><b> Ð Cometa Doge Fren Ð</b>
                  <br /> Doge rewards Token  
                  <br /> Airdops Coming Q1 2022.
                </h3>
                <h2 style={{marginBottom:'-15px'}}>🛡</h2>
                <div className="img-zoom">
                  <img src='images/web/hound.gif'  width="175px" style={{margin:'0px', opacity:'0.5'}} alt=''  />
                </div>
                  
              </div>
              <div className="bottom-space-sm" />
              <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '25px', fontWeight: '500', textAlign: 'center', letterSpacing:'8px'}}>
                      BE PART OFCosmosapien OUR COMMUNITY 
                      <br />PREPARE FOR LAUNCH
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