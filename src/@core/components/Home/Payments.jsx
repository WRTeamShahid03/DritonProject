import React from 'react'
import btc from '../../Assets/Images/btc.png'
import ltc from '../../Assets/Images/ltc.png'
import eth from '../../Assets/Images/eth.png'
import usdt from '../../Assets/Images/usdt.png'
import usdc from '../../Assets/Images/usdc.png'
import trx from '../../Assets/Images/trx.png'
import doge from '../../Assets/Images/doge.png'
import dash from '../../Assets/Images/dash.png'
import pm from '../../Assets/Images/pm.png'

const Payments = () => {
    const cardData = [
        {
            id: 0,
            icon: btc,
            title: 'BTC',
            desc: 'We accept Bitcoin as a payment method.'
        },
        {
            id: 1,
            icon: ltc,
            title: 'LTC',
            desc: 'We accept Litecoin as a payment method.'
        },
        {
            id: 2,
            icon: eth,
            title: 'ETH',
            desc: 'We accept Ethereum as a payment method.'
        },
        {
            id: 3,
            icon: usdt,
            title: 'USDT',
            desc: 'We accept Tether as a payment method.'
        },
        {
            id: 4,
            icon: usdc,
            title: 'USDC',
            desc: 'We accept USD Coin as a payment method.'
        },
        {
            id: 5,
            icon: trx,
            title: 'TRX',
            desc: 'We accept Tron as a payment method.'
        },
        {
            id: 6,
            icon: doge,
            title: 'DOGE',
            desc: 'We accept Dogecoin as a payment method.'
        },
        {
            id: 7,
            icon: dash,
            title: 'DASH',
            desc: 'We accept Dash as a payment method.'
        },
        {
            id: 8,
            icon: pm,
            title: 'Perfect Money',
            desc: 'We accept Perfect Money as a payment method.'
        },

    ]
    return (
        <>
            <section id="payments" className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h2 className='common_h_tags'>Payment Methods</h2>
                        <p className='commom_p_tags'>We accept various payment methods.</p>
                    </div>
                    {
                        cardData.map((e) => {
                            return <div className="col-sm-12 col-md-12 col-lg-4">
                                <div className="card">
                                    <img class="card-img-top" src={e.icon.src} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{e.title}</h5>
                                        <p class="card-text">{e.desc}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </section >
        </>
    )
}

export default Payments
