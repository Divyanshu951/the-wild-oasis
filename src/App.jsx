import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

// const router = createBrowserRouter([
//   {}

// ]);

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: var(--color-brand-500);
  color: white;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
  border-radius: 20px;
`;

function App() {
  // return <RouterProvider router={router} />;
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The wild Oasis</H1>
        <Button onClick={() => console.log("Click")}>Button</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
