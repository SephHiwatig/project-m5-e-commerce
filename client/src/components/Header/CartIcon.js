// Libraries
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentModal from "../Payment/PaymentModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Actions";
import { THEME } from "../Style/Theme";

// Styles
import styled from "styled-components";

const CartIcon = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const items = useSelector((state) => state.purchase);
  const itemCount = Object.keys(items).length;
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <CartBtn onClick={() => dispatch(toggleModal())}>
        <ShoppingCartIcon />
        <ShoppingCartIconCount>{itemCount}</ShoppingCartIconCount>
      </CartBtn>
      {isOpen ? <PaymentModal /> : null}
    </Wrapper>
  );
};

const ShoppingCartIconCount = styled.span`
  height: 25px;
  width: 25px;
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 4px 7px 4px 7px;
  vertical-align: top;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  margin-top: -10px;
  margin-left: -10px;
`;

const CartBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(1.2);
  }

  @media (max-width: ${THEME.mobile}) {
    padding-top: 15px;
  }
`;

const Wrapper = styled.section`
  color: BLACK;
  padding: 30px;

  @media (max-width: 873px) {
    padding: 1px;
  }
`;

export default CartIcon;
