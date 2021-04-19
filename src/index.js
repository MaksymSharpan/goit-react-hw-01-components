import React from "react"
import ReactDOM from "react-dom"

import SocialProfile from "./components/SocialProfile/index"
import Statistics from "./components/Statistics/index"
import FriendList from "./components/FriendList/index"
import TransactionHistory from "./components/TransactionHistory/index"

ReactDOM.render(
	<React.StrictMode>
		<SocialProfile />
		<Statistics />
		<FriendList />
		<TransactionHistory />
	</React.StrictMode>,
	document.getElementById("root")
)
