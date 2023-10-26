import React from 'react';
import Header from "./conponents/Header/Header";
import Navbar from './conponents/Navbar/Navbar';
import Profile from './conponents/Profile/Profile';
import DialogsContainer from "./conponents/Dialogs/DialogsContainer";
import Music from "./conponents/Music/Music";
import News from "./conponents/News/News";
import Settings from "./conponents/Settings/Settings";

import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
	const {
		state,
		dispatch
	} = props

	return (
		<div className={styles.app_wrapper}>
			<Header />
			<Navbar />
			<div className={styles.app_wrapper_content}>
				<Routes>
					<Route
						exact
						path="/profile"
						Component={() => <Profile />}
					/>
					<Route
						exact
						path="/dialogs"
						Component={() => <DialogsContainer />}
					/>
					<Route path="/music" Component={Music} />
					<Route path="/news" Component={News} />
					<Route path="/settings" Component={Settings} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
