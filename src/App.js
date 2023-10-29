import React from 'react';
import Header from "./conponents/Header/Header";
import Navbar from './conponents/Navbar/Navbar';
import Profile from './conponents/Profile/Profile';
import DialogsContainer from "./conponents/Dialogs/DialogsContainer";
import Music from "./conponents/Music/Music";
import News from "./conponents/News/News";
import Settings from "./conponents/Settings/Settings";
import UsersContainer from "./conponents/Users/UsersContainer";

import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './conponents/Profile/ProfileContainer';
import HeaderContainer from './conponents/Header/HeaderContainer';

const App = (props) => {
	return (
		<div className={styles.app_wrapper}>
			<HeaderContainer />
			<Navbar />
			<div className={styles.app_wrapper_content}>
				<Routes>
					<Route
						path="/profile/:userId?"
						Component={() => <ProfileContainer />}
					/>
					<Route
						exact
						path="/dialogs"
						Component={() => <DialogsContainer />}
					/>
					<Route
						exact
						path="/users"
						Component={() => <UsersContainer />}
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
