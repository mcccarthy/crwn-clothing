<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';

=======
/** @format */
import { Routes, Route } from 'react-router-dom';
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

<<<<<<< HEAD
const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
=======

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<shop />} />
				<Route path='sign-in' element={<SignIn />} />

		</Route>
		</Routes>
	)
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
};

export default App;
