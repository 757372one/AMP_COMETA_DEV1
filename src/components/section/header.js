
import React, { useState, useEffect } from 'react';




export function Header() {

  return (
      <nav className='nav'>
        <p className="bottom-space-sm" />
        <div className='row' style={{display:'flex'}}>
                  <div className="flux">CO </div>
                  <div className="neon">META </div>
                  <img src='images/web/comet.png' alt='' width="100px"  />
              </div>
          <p className="bottom-space-xsm" />
          <div className='row'>
            <ul>
                <li><a href="http://dash.cometaclub.com/">Game</a></li>
                <li><a href="https://www.twitter.com/cometaclub">Twitter</a></li>
                <li><a href="https://opensea.io/collection/cosmosapiens">Opensea</a></li>
                <li><a href="https://discord.gg/GRQrmvZY8y">Discord</a></li>
                <li><a href="https://t.me/cometaclub">Telegram</a></li>
                <li>
                    <p style={{fontSize: '20px', margin: '-5px 0px 0px 0px', opacity:1}}>☄️</p>
                </li>
            </ul>
          </div>
        <p className="bottom-space-sm" />
      </nav>
  );
}