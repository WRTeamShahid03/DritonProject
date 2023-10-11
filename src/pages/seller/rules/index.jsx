import { Breadcrumbs, Card, CardHeader, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Breadcrum from 'src/pages/components/Breadcrum'

const Index = () => {
    return (
        <>
            <Breadcrum title="Terms and Conditions" />

            <Card sx={{ p: "22px" }}>

                <Typography sx={{ textAlign: "center", fontSize: "24px", fontWeight: "900", textDecoration: "underline" }}> Seller's Terms and Rules</Typography>
                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> General Rules:</Typography>
                <ul>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Payout twice a month at 15 and end of month -  USDT TRC20 and PerfectMoney. (Only who have 50$ or more) </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Instant Withdrawal available with 5% processing fee over $100 earnings. NEW OPTION</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Always check your Wallet Address and Method before Payout date, make sure they are correct. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Activate 2FA Security to keep your account secured. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Do not share your second password with others. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you want to extract your tools for rechecking, you have option at /seller/tools/manage</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Do not add duplicated tools, you can result with ban!</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>You try to use TRICKS on our system and give us bad REPUTATION, you get ban 7/15/30days or permanent</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Do not add same tools in other stores. If we find out, we have 0 tolerance for this kind of sellers, immediately you will be Banned Permanently.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Do not advertise links of other stores or you will get banned and your balance will be reset.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Do not upload in sendspace or sites which delete files. Upload in <Link href='https://mega.io/' target='_blank'> https://mega.nz/ </Link> or Private Host of yours.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Frequently check your tools and remove all "Bad/Invalid or Dead" tools, if your Valid Rate goes under 50% you can result with ban.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Do not click Suggest Me button if you did not added a requested tool.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you send fake proof or Proof without Date and Time we don't accept them and you can result with ban.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>You have 2Hours to send proof for reported tools after that we don't accept any proof.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tools uploading limit is 500x per type.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tools Uploaded on wrong section will be deleted and you will get warned.</li>
                </ul>


                <Typography sx={{ color: "#c0392b", fontSize: "20px", fontWeight: "600" }}> Banned's Rules:</Typography>

                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px", color: '#e74c3c' }}>If you get banned for 7/15/30 Days, your tools will be available for sale on Store, but your earnings will be frozen until the day of unban and solds will not be counted on your earnings. Do not repeat same mistakes otherwise you will get banned Permanently.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px", color: '#e74c3c' }}>If you get banned Permanently, your tools will be deleted and your balance will be reset. ( You will not get Payout )</li>
                </ul>


                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> Accounts Rules:</Typography>

                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Add your Tools based on Price Limit otherwise you will be warned and can result with ban.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If your owned tools not listed on Price Limit page, try to add average price or Contact Us via Ticket.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Dating Accounts which have option Premium and Free add them with bracket like this : Match(Paid) or Match(Unpaid).</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Dating Accounts without info not allowed to be added.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Other Accounts don't need brackets like (Paid) (Unpaid).</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tools which are older than 3 months will be cleared by System.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Ourtime wich can't access account settings will be Refunded as Well (Account Settings Unavailable)</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Do not upload Carded eHarmony Dating Accounts.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Seekingarrangement now is called Seeking, so you need to correct them before upload, we will consider it escaping of Duplicate System.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Zoosk accounts must have Seeking or Interested on Description, if buyers complains for it, will be refunded.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>We suggest for Dating Accounts to have Seeking or Interested on Description, you should get more sales like that with details, If any complains and its without Seeking we will make refund.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Only Ourtime and BlackPeopleMeet Paid accepted with numbers ( not Unpaids).</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Ourtime Paid with number inside need to have on Description "with Phone Number" otherwise you get refund.</li>
                </ul>


                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}>Stuffs Rules:</Typography>
                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Check shells,mailer,SMTP for delivery before add to site.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you add shells, mailers and SMTP not deliver you will get WARNED 3 time MAX.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Write on Description if is Shell,Mailer,Cpanel HTTPs or HTTP if is not as described you will get WARNED.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>SMTP's need to described if is it IP or Domain and which Port use.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>EmailPass - Combo are forbidden to add for sale.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Don't create new Type for those type : Shell , Cpanel , SSH , Mailers , SMTP.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you add space on Link, Port, Login, Password of Stuff - Internal checkers can't validate them and your tools will get deleted.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Shell with same domain and subdomain not accepted you can result with ban.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Forbidden to add cPanel subdomain while Root domain exist on store, you will get BANNED for that.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>ScamPages need to be tested and latest otherwise gets refund.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>SelfieID, DriverLicense and other IDs which has been expired will be refunded.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Fullz are allowed only in Bulk to add for sale, no Single Fullz allowed.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Webmail need to have on Description if its custom domain or if its Mail Company Webmail, Like( Orange.fr, t-mobile.de, kabelfoon.nl, etc...)</li>
                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}>Tutorials Rules:</Typography>
                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Only Private Tutorials will be accepted.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tutorials from youtube or with youtube link will be refunded and seller will get banned.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tutorials from Google , Forums which is public will be refunded.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Suggested Video Tutorial its more easy even for buyers.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tutorials with Text if they are not explained well with Screenshoots will be refunded.</li>

                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> RDP Rules:</Typography>
                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP will be uploaded only on RDP Section as RDP if you upload on Stuffs you will get banned. </li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP need to be described if is it Admin or User on Description.</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP need to be described which Windows have installed on Description.</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP need to be described if is Blacklisted or Clean on Description.</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP need to be described how much RAM own on Description and must be 2GB+ for CARDED RDP.</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP need to be described Country/State on Country Field.</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Follow RDP User and Admin Prices on Price Limit table.</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>When you upload RDP be careful to not add any word or something on IP and PORT, put like ( 127.0.0.1 3389 )</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>RDP Carded - If last less than 7 Days will be refunded immediately.</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Only 2 User allowed to add per RDP.</li>

                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Tools Type: RDP is only for Cracked RDP's  - Tools Type: RDP Carded are only for carded RDP's  - if someone mix those 2 types will be WARNED.</li>

                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}> Warning System for Seller:</Typography>
                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you get 3 Warn by Staff , you will get banned for 7 Days.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you get 5 Warn by Staff , you will get banned for 15 Days.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you get 10 Warn by Staff , you will get banned for 30 Days.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you get 10 + Warn by Staff , you will lose all of your balance and you will get banned Permanently.</li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Warns counting will be reset every month.</li>

                </ul>

                <Typography sx={{ color: "#7367f0", fontSize: "24px", fontWeight: "600" }}>Bonuses for Seller:</Typography>
                <ul>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>Every 1000$ Earnings you get <Typography variant='span' sx={{ color: '#27ae60' }}>50$ Bonus as Gift from Strongtools.</Typography></li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you reach 5000$ Earnings you will get <Typography variant='span' sx={{ color: '#27ae60' }}>60% on next Payout Period.</Typography></li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you reach 10000$ Earnings you will get<Typography variant='span' sx={{ color: '#27ae60' }}> 60% Permanently.</Typography></li>
                    <li style={{ fontWeight: "600", fontSize: "16px" }}>If you reach 10000$ Earnings you will get <Typography variant='span' sx={{ color: '#27ae60' }}>500$ as Gift from Strongtools.</Typography></li>

                </ul>

                <hr style={{ opacity: "0.3", margin: "16px 0" }} />

                
                <Typography sx={{ color: "#c0392b", fontSize: "24px", fontWeight: "400",p: '0px 50px' }}>Rules will be Updated time by time , If you broke any of those rules you will get banned based from Admins judgements.</Typography>

            </Card>
        </>
    )
}

export default Index
