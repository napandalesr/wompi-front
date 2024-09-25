import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import FormLogin from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Renderizado del componente Form login', () => {

  const setup= () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormLogin/>
        </BrowserRouter>
      </Provider>
    );
    const title = screen.getByRole("heading", { name: /Ingresa con tus datos/i});
    return {
      title,
    }
  }

  test("El titulo debe ser Ingresa con tus datos", async ()=> {
    const { title } = setup();
    expect(title).toBeInTheDocument();
  })
})