import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routess/Routes';

function App(){
  return(
      <div data-theme="business" className='max-w-4xl mx-auto'>
          <RouterProvider
            router={router}
            >
           
          </RouterProvider>
      </div>
  )
}
export default App;