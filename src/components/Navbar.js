import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFTix</p>
        <div className="flex mt-4">
          <Router>
          <Route path="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Route>
          <Route href="/create-nft">
            <a className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Route>
          <Route href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Route>
          <Route href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Route>
          </Router>
        </div>
      </nav>
    </div>
  )
}
