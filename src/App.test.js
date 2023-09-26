/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

  import {render, waitFor, screen} from '@testing-library/react';
 import App from './App';

describe("App.js Test", () => {
  it("should render App.js without fail", async () => {
    // render( <App name="test" /> )

      fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve([
          {id: 100, name: "React Test"},
          {id: 200, name: "Shahul"},
          {id: 300, name: "Hameed"}
        ])
      }))

       const renderApp = render(<App />)
       const isShahulAvailableInScreen = await waitFor(() => screen.getByText("Shahul"))
       expect(isShahulAvailableInScreen).toBeInTheDocument();

       expect(renderApp).toMatchSnapshot();

      /* expect(renderApp).toMatchInlineSnapshot()
       const userList = await waitFor(() => screen.getAllByText("syed"))
       console.log(userList)
       */
  })
})


// react lo state vachesi Async process
//Async 