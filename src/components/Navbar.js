import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll";



const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;

  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background:	#8A2BE2;
  
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }

  font-size: 0.9rem;
  &:hover {
    color: white;
  }

  
  
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: black;
  position: fixed;
  top: 0;   
  left: 0;
  right: 0;
  z-index:1

  
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.9rem;





  
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }


  
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
   max-height: ${({menu})=>(menu? "300px":0)};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }

  
`;


export const Navbar = () => {


    const [menu, setmenu] = useState(false)

    return (
        <Nav>
        <Logo href="">
          <span>NITHIN ALVA</span>
        </Logo>
        <Hamburger onClick={()=>setmenu(!menu)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu menu={menu}>
          <MenuLink href="">
          <Link
    activeClass="active"
    to="education"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
EDUCATION</Link></MenuLink>
          <MenuLink href="">
          <Link
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Skills</Link></MenuLink>
          <MenuLink href="">
            
          <Link
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={-120}
    duration={500}
>PROJECTS </Link> </MenuLink>
          <MenuLink href="">
          <Link
    activeClass="active"
    to="social"
    spy={true}
    smooth={true}
    offset={-150}
    duration={500}
>SOCIALS </Link></MenuLink>
          <MenuLink href="">
            
          <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>CONTACT ME</Link></MenuLink>
        </Menu>
      </Nav>
    )
}
