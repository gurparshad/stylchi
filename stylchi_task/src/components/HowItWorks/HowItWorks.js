import React from 'react'
import './HowItWorks.css';
import Card from '../Card/Card';
import Button from '@material-ui/core/Button';

// material ui icons
import StoreIcon from '@material-ui/icons/Store';
import HomeIcon from '@material-ui/icons/Home';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

export default function HowItWorks() {
    return (
        <div className="content">
            <div className="heading">
                <h1>To book a service at home</h1>
            </div>
            <div className="top__info">
                <p>In three simple steps, book an appointment to avail salon and spa services at home!</p>
                <div className="top__info__buttons">
                <Button
                    variant="contained"
                    
                    startIcon={<StoreIcon />}
                     >Venue
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<HomeIcon />}
                     >Home
                </Button>
                
                <div className="right__left__icons">
                <ChevronLeftIcon/>
                </div>
                <div className="right__left__icons">
                <ChevronRightIcon/>
                </div>
                
                </div>
            </div>
            <div className="cards__section">
                <Card src="https://www.pngitem.com/pimgs/m/164-1649575_customer-service-woman-icon-customer-service-icon-woman.png" title="Book"
                    description="Search for the service you need, select a suitable expert, choose a payment method and book a home appointment."
                 />
                 <div className="arrowIcon">
                 <TrendingFlatIcon style={{ fontSize: 35 }}/>
                 </div>
                  <Card src="https://www.pngitem.com/pimgs/m/55-554665_cafe-icon-png-coffee-meeting-clipart-transparent-png.png" title="Your Beauty Expert Arrives"
                    description="The Beuty Expert arrives at your location. Choose a suitable spot to avail your services and enjoy!"
                 />
                 <div className="arrowIcon">
                 <TrendingFlatIcon style={{ fontSize: 35 }}/>
                 </div>
                  <Card src="https://lh3.googleusercontent.com/proxy/p0YFMKq9U8899MP6k10KH64ykbtaM6EEshrpGwQy0hgNibN7zNZvGwZNe_CiBIQYwYq-ckTcCQp8p7wbVRouvWWuuygURTcMLbf2qxqDeS7P0KEoNGs203xe0A" title="Pay"
                    description="Pay the expert in cash, unless you chose to pay with a credit card or your Stychi wallet at the time of booking."
                 />
            </div>
        </div>
    )
}
