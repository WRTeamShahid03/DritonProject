import { Breadcrumbs, Card, CardHeader, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Breadcrum from '../components/Breadcrum'

const Index = () => {
    return (
        <>
            <Breadcrum title="Terms & Rules"/>

            <Card sx={{ p: "22px" }}>
                <Typography sx={{ fontSize: "20px" }}>Dear <Typography variant='span' sx={{ color: "rgb(255, 0, 0)" }}>harishdev</Typography></Typography>
                <Typography sx={{ color: "rgb(0, 128, 0)", mt: "8px" }}>IMPORTANT: Read some rules for your benefit!</Typography>

                <hr style={{ opacity: "0.3", margin: "16px 0" }} />

                <Typography sx={{ textAlign: "center", fontSize: "24px", fontWeight: "900", textDecoration: "underline" }}> Terms and Rules</Typography>
                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> Disclaimer:</Typography>
                <ul>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you have registered on our shop and added balance, you have accepted all of our rules. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>The owners of this page will not take any responsibility for the way you use the information provided on this website.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Please read the 'Terms and Rules.' If you violate any of the rules, you will be subject to punishment, including possible banning and loss of balance. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you do not agree to our rules, you are free to discontinue using your account. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Please note that once you send an amount as a deposit, it is non-refundable. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Completed deposits cannot be refunded.</li>
                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> Refunds of Purchased Tools!</Typography>

                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>You have only 10 minutes to report a bad tool using the 'Report' button.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you open a ticket after the reporting time has expired, we will not accept complaints.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you have reported a tool and it has not been refunded, please check the report page for proof of working before opening a ticket.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If the reported tool has not been refunded and there is no proof of working, please open a ticket and request an explanation.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If a purchased tool is not working or does not match the description, even if you do not report it, our support team will provide a refund. However, if the seller provides proof of working with a specific time and date after the sale, we will not issue a refund.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If a dating profile requires a phone number for verification, our SMS Code Service is available to help you complete the process. Please note that we do not refund purchases related to phone number verification.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>We do not offer refunds if the working status of a tool has been proven, even if it does not work or gets blocked due to your use of bad IPs.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>We do not offer refunds if your purchased webmail/SMTP/mailer has stopped sending emails. Please be aware that we do not guarantee limitations.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>We provide checkers to validate SMTP/cPanels/shells. It is your responsibility to check before making a purchase. (If a cPanel/shell appears as 'RED UNSAFE SITE' on the checker, it indicates an unsafe site.)</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Webmails/offices will be tested for login and delivery, and if they are not working, we will issue a refund.</li>
                </ul>


                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}>SMS Service Rules!</Typography>
                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>When you purchase an SMS code, it can only be used once. After you receive the SMS, the service will stop.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>The "Re-Use" option is for re-ordering the same number for a second SMS code.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you do not receive an SMS within 30 minutes, you need to click the "REFUND" button, and you will receive your money back.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>A rented number is a valid phone number for one month, and you can receive unlimited SMS during that period. It is available in two options:</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Single Service - You need to select one service, and you will receive SMS only for that specific site for one month.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Multiple Service - You will receive SMS for all sites for one month. However, please note that not all sites are compatible with the rented number, and there will be no refund in such cases.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you have ordered a rented number and you are not receiving the code, you need to request a refund. After we have tested and verified the issue, we will provide a refund.Read Rules before ORDER!</li>
                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> RDP Rules!</Typography>
                <Typography sx={{ color: "#c0392b", textDecoration: 'underline', mt: "6px" }}>RDP Market by Strongtools:</Typography>

                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Valid for 1 Month and Renewable through Ticket or Renew Button. Please make your renewal request 3-5 days before the expiration date. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>It is important to note that we do not guarantee the functionality of our RDP on all your targeting sites. We strongly recommend reading the rules before placing an order. </li>
                </ul>

                <Typography sx={{ color: "#c0392b", fontSize: "24px", fontWeight: "600", textDecoration: 'underline' }}> Carded & Cracked:</Typography>

                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP Cracked - Our support team will check and provide proof of functionality. However, please note that we do not offer any guarantee after the initial login, as these are full access RDPs. It's important to be aware that the owner may periodically detect your presence or change the password. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP Carded - If the RDP stops working within 7 days, you are eligible for a refund. However, after the initial 7-day period, it is no longer our responsibility.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP Carded - use custom ports for connection. To connect properly, make sure to include the IP address followed by the port number. For example: 127.0.0.1:3389 or 127.0.0.1.Please try both with and without the port.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Before making a purchase, we recommend reading the RDP performance details in the description. We cannot be held responsible if you buy an RDP and later request features or capabilities that were not explicitly described.</li>

                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> Changing the password of valid tools!</Typography>
                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>We've seen some of Users {">"} They purchase the tools, then change password and report tool as not working!</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>For our valued clients, we want to emphasize that we are dedicated to ensuring the success of your business. We have a team of over 12 support members who are available online to assist you with reports, tickets, and tool verification.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>We kindly request that you refrain from changing passwords on the provided tools. Doing so puts your work at risk of being BANNED and BLOCKED permanently. Even if you create a new account, your logs will be cross-matched, resulting in further bans.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>To avoid any disruptions or negative consequences, we strongly advise against altering passwords associated with the tools we provide. Our team is here to help you maximize your business operations and minimize any potential risks.</li>

                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> Warning System of Strongtools!</Typography>
                <ul>


                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you receive 3 warnings from our staff, you will lose half of your balance, and a temporary ban of 7 days will be imposed.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you accumulate 5 warnings from our staff, you will lose half of your balance, and a temporary ban of 15 days will be enforced.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you reach 10 warnings from our staff, your entire balance will be forfeited, and a longer ban of 30 days will be implemented.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you receive 10 or more warnings from our staff, your entire balance will be forfeited, and a permanent ban will be issued.</li>
                </ul>


                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> Deposit Payment Methods Accepted:</Typography>
                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>PerfectMoney - PM</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Bitcoin - BTC</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>LiteCoin - LTC</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>DogeCoin - DOGE</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tether - USDT TRC20</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tron - TRX</li>
                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> Why i did not receive funds?</Typography>
                <Typography sx={{ color: "#008000", fontSize: "24px", fontWeight: "600" }}>Crypto Payments:</Typography>

                <li style={{ fontWeight: "600", fontSize: "16px", listStyle: "number" }}>Deposit Amount: Ensure that you send the exact amount generated by our system for the transaction. This helps us accurately track and credit your payment.</li>
                <li style={{ fontWeight: "600", fontSize: "16px", listStyle: "number" }}>Waiting for Confirmation: After sending the payment, please allow for at least 1 confirmation on the blockchain network. This process may take some time, depending on the network congestion and the specific cryptocurrency you are using.</li>
                <li style={{ fontWeight: "600", fontSize: "16px", listStyle: "number" }}>Automatic Balance Crediting: Once the transaction receives the required confirmation(s), our system will automatically credit your account balance. There is no need to contact support or request manual processing.</li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}> <Typography variant='span' sx={{ color: "#008000", fontSize: "16px", fontWeight: "600" }}>PERFECT MONEY </Typography> - PM is simpler than Cryptos, You write amount for example 10.00USD and click PAY, You have to wait until the Payment page redirects you on Strongtools.GA and will show you "<Typography variant='span' sx={{ color: "#27ae60", fontSize: "16px", fontWeight: "600" }}>PAYMENT SUCCESS </Typography>" !</li>


                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600", mt: "10px" }}>Am i safe on Strongtools?</Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>We want to assure you that StrongTools prioritizes your safety and security. Here are some key points regarding the protection of your data and transactions:</Typography>

                <li style={{ fontWeight: "600", fontSize: "16px" }}> 1. Fully Encrypted Database: Our database is fully encrypted, ensuring that your information remains secure. We take privacy seriously and employ robust encryption methods to safeguard your data.
                </li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}> 2. Encrypted Traffic: We offer encrypted traffic through HTTPs with 128-bit SSL encryption. This encryption protocol helps protect the integrity and confidentiality of your communications while using our platform.
                </li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}> 3. Tools Safety: We guarantee that all tools you purchase from us are 100% safe and encrypted. We take measures to ensure that the tools we provide adhere to high security standards.
                </li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}> 4. Two-Factor Authentication (2FA): For added security, we offer a 2FA authenticator option. We highly recommend enabling this feature, as it provides an extra layer of protection for your account.
                </li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}> At StrongTools, we are committed to maintaining a secure environment for our users. If you have any further questions or concerns about your security on our platform, please don't hesitate to reach out to our support team.
                </li>


                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600", mt: "10px" }}>  If the domain is offline / not working what to do?
                </Typography>

                <li style={{ fontWeight: "600", fontSize: "16px" }}>The current and main domain is - STRONGTOOLS.GA - if this domain not work , you need to use the next domains below !</li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}>Backup: <Typography variant='span' sx={{ color: "#2980b9", fontSize: "16px", fontWeight: "600" }}>STRONGTOOLS.ME</Typography></li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}>Backup: <Typography variant='span' sx={{ color: "#2980b9", fontSize: "16px", fontWeight: "600" }}>STRONGTOOLS.ML</Typography></li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}>Backup: <Typography variant='span' sx={{ color: "#2980b9", fontSize: "16px", fontWeight: "600" }}>STRONGTOOLS.CC</Typography></li>
                <li style={{ fontWeight: "600", fontSize: "16px" }}>Find All Other Domains in - STRONGTOOLSDOMAINS.COM</li>

                <hr style={{ opacity: "0.3", margin: "16px 0" }} />

            </Card>
        </>
    )
}

export default Index
