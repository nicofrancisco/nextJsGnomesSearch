import styled from "styled-components";

const HomeRow = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px 15px;
  width: 100%;

  div.notFound {
    color: #ccc;
    font-size: 1.5rem;
    font-weight: lighter;
    padding: 140px 30px
    text-align: center;
    width: 100%;
  }

div.cards{
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  padding-top: 10px;
}
/*
div.cards-enter.cards-enter-active {
	opacity: 1;
	transition: opacity 900ms ease-in;
}

div.cards-leave {
	opacity: 1;
}

div.cards-leave.cards-leave-active {
	opacity: 0.01;
	transition: opacity 900ms ease-in;
}*/


div.item-enter {
	   opacity: 0.01;
}

div.item-enter.item-enter-active {
	opacity: 1;
	transition: opacity 1200ms ease-in;
}

div.item-leave {
	opacity: 1;
}

div.item-leave.item-leave-active {
	opacity: 0.01;
	transition: opacity 1200ms ease-in;
}

  @media (min-width: 630px) {
    justify-content: flex-start;
  }
`;
export default HomeRow;
