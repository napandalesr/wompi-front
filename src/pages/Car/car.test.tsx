import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Car from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Renderizado del componente Car', () => {
  const setup= () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Car/>
        </BrowserRouter>
      </Provider>
    );
    const title = screen.getByRole("heading", { name: /Carrito/i});
    const titleProducts = screen.getByRole("heading", { name: /TAMBIÉN TE PODRÍA GUSTAR/i});
    return {
      title,
      titleProducts
    }
  }

  test("El titulo debe ser Carrito", async ()=> {
    const { title } = setup();
    expect(title).toBeInTheDocument();
  })

  test("El titulo de la sección de productos debe ser TAMBIÉN TE PODRÍA GUSTAR", async ()=> {
    const { titleProducts } = setup();
    expect(titleProducts).toBeInTheDocument();
  })
})