import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getFirstPage } from "../Actions";
import { listToMatrix } from "../Helper/matrixConverter";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalStyles from "./Style/GlobalStyle";

const NavDropDown = ({ categories, SetCategory }) => {
  function toggle() {
    document.getElementById("menu").classList.toggle("active");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".menu")) {
      let dropdowns = document.getElementsByClassName("menu");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("active")) {
          openDropdown.classList.remove("active");
        }
      }
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    fetchItems("lifestyle");
  }, []);

  const fetchItems = async (category) => {
    const data = await fetch("http://localhost:4000/api/items/" + category);

    if (data.ok) {
      const items = await data.json();
      const matrix = listToMatrix(items);
      dispatch(getFirstPage(matrix, category));
    }
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <NavBarToggle onClick={toggle} id="toggle">
        <MenuIcon style={{ color: "black" }} />
      </NavBarToggle>
      <NavDropdownList id="menu">
        {categories.map((category) => {
          return (
            <NavDropdownListLi
              id="item"
              key={category}
              onClick={() => {
                fetchItems(category);
                SetCategory(category);
              }}
            >
              {category}
            </NavDropdownListLi>
          );
        })}
      </NavDropdownList>
    </Wrapper>
  );
};

const StyledButton = styled.button`
  display: flex;
  flex: 0 1 1;
  flex-grow: 1;
  word-break: keep-all;
  border: none;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  border-right: 1px solid rgba(160, 101, 65, 0.1);
  padding: 10px 0;
  background: transparent;

  &:hover {
    cursor: pointer;
    background: #f5f4ee;
  }
  &:focus {
    outline: 1px solid rgb(160, 101, 65);
  }

  &:last-child {
    border-right: none;
  }
`;

const NavBarToggle = styled.span`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;

const NavDropdownListLi = styled.li`
  @media (max-width: 699px) {
    padding: 20px;
    color: black;
    text-decoration: none;
    position: relative;
    border-bottom: 0.5px solid lightgrey;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    border-right: 1px solid rgba(160, 101, 65, 0.1);
    background: transparent;
    &:hover {
      background-color: darkgray;
      cursor: pointer;
    }
  }
`;

const NavDropdownList = styled.ul`
  @media (max-width: 699px) {
    display: none;
    position: absolute;
    top: 30;
    left: 0;
    background-color: white;
    color: black;
    min-width: 250px;
    overflow: auto;
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  @media (max-width: 699px) {
    display: none;
  }
`;

const Wrapper = styled.span`
  @media (min-width: 699px) {
    display: none;
  }

  @media (max-width: 699px) {
    padding-top: 10px;
    color: #fff;
    text-decoration: none;
    position: relative;
    display: inline-block;
    align-items: center;
  }
`;

export default NavDropDown;
