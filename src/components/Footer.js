import React from 'react';
import styled from 'styled-components';

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import {Box,Row,Column,Heading,FooterContainer,FooterLink} from "./FooterStyles";
const Footer = () => {
	return (
        <div>
		<Box>
     
			<h1
				style={{
					color: "green",
					textAlign: "center",
					

				}}
			>
			
			</h1>
			<FooterContainer>
     
 
				<Row>
					<Column>
						<Heading>COMPANY</Heading>
						<FooterLink href="/About">
						ABOUT VV
						</FooterLink>
						<FooterLink href="#">
							CLIENTS
						</FooterLink>
						<FooterLink href="#">
							OURTEAM
						</FooterLink>
					</Column>
					<Column>
						<Heading>SERVICES</Heading>
						<FooterLink href="#">
						ONLINE MEET
						</FooterLink>
						<FooterLink href="#">
                        SCHEDULE EVENTS
						</FooterLink>
						<FooterLink href="#">
						GROUP CALLS
						</FooterLink>
						
					</Column>
					<Column>
						<Heading>CONTACTUS</Heading>
						<FooterLink href="#">
                        <BsTwitter /> Twitter
                        
                        
                        
						</FooterLink>
						<FooterLink href="#">
                        <BsYoutube /> Youtube
                        
                        
						</FooterLink>
						<FooterLink href="#">
                        <FaFacebookF /> Facebook
                        
						</FooterLink>
						
					</Column>
					<Column>
						<Heading>SUPPORTS</Heading>
						<FooterLink href="/Contact">
								CUSTOMER SUPPORT
            </FooterLink>
						<FooterLink href="#">
									TECHNICAL SUPPORT
						</FooterLink>
						<FooterLink href="#">
								PARTNERSHIPS & SALES
						</FooterLink>
						
					</Column>
				</Row>
                <br></br>
        <footer style={{ backgroundColor: '', color: '#fff', padding: '0px', textAlign: 'center' }}>
      <p style={{ fontSize: '20px', margin: '0' }}>
        &copy; {new Date().getFullYear()} VirtualVisa | Developed by VirtualVisa 
        <br></br>
        <a
          href="http://localhost:3000/Home" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold'}}
        >
          Inc. All rights reserved. Terms Privacy Trust Center Acceptable Use Guidelines Legal & Compliance Your Privacy Choices Cookie Preferences
        </a>
      </p>
    </footer>
			</FooterContainer>
		</Box>
        </div>
	);
};
export default Footer;