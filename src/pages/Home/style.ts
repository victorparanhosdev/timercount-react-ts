import styled from "styled-components";

export const Container = styled.main`
 background: ${({ theme }) => theme.BLUE_200};
 display: flex;
 flex-direction: column;
  padding: 2rem;

 margin: 2rem;

 border-radius: 8px;


 form {

  margin: auto;
  text-align: center;
  div {
   
    label {
      font-size: 1.2rem;

      display: block;
    }
    input {
      margin-top: 0.5rem;
     border: none;
     border-radius: 8px;
     padding: 1rem;
     width: 5rem;
     outline: none;
  
   
    }

   
  }
  p {
    color: red;
    margin-block: 0.5rem;
    font-size: 1.2rem;
  }

  button {
      border: none;
      padding: 1rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 1rem;
      background: ${({ theme }) => theme.BLUE_10};
      color: ${({ theme }) => theme.WHITE};
      transition: background 0.2s;
      margin-top: 1rem;
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.BLUE_30};

    }


    }
 
   

 }

 > div {
    display: flex;
  
    justify-content: center;
  
    span {
      font-size: clamp(8rem, 15vw + 4rem, 30rem);
      font-weight: 700;
    }

 }

`;

