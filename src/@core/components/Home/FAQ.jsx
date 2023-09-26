import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    const data = [
        {
            id: 0,
            ques: 'What should I do, when I make deposit via Crypto?',
            ans: 'When you make Deposit using Cryptocurrencies you need to wait at for 1 confirmation from Blockchain Network to be credited balance automatically by our system.'
        },
        {
            id: 1,
            ques: 'Do i get BONUS on Deposits?',
            ans: 'Yes, we give to all users 10% on each Deposit, which can be used to purchase on store.'
        },
        {
            id: 2,
            ques: 'What type of tools I can find on Strongtools?',
            ans: 'You can find all type of tools like Accounts: Dating,Shopping,Shipping,VPN,Food,Gaming,Antiviruses,Licenses - Stuff: RDP,SMTP,SSH,cPanel,Webmail,Leads,CEOCFO,AWS SES - Tutorials: Hacking,Cracking,Spamming etc.'
        },
        {
            id: 3,
            ques: 'What if searched tools are not available on StrongTools?',
            ans: `Don't worry, we will cover that part it's enough for you to make request of tools or accounts as per your needs, we will help to fulfill your request as fast and secure by notify our Sellers. Then you will be notified when Sellers added the tools/accounts of your needs`,
        },
    ]
    return (
        <>
            <section id='faq' className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h2 className='common_h_tags'>Frenquently Asked Questions</h2>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <Accordion defaultActiveKey="0">
                        {
                            data.map((e) => {
                                return  <Accordion.Item eventKey={e.id} key={e.id}>
                                        <Accordion.Header>{e.ques}</Accordion.Header>
                                        <Accordion.Body>
                                            {e.ans}
                                        </Accordion.Body>
                                    </Accordion.Item>
                            })
                        }
                        </Accordion>


                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ
