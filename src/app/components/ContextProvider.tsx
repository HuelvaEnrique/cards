import React, { createContext, ReactElement, useEffect, useState } from "react";


export const Context = createContext<{

	Mode: boolean;
	setMode: (value: boolean) => void;

}>({

	Mode: true,
	setMode: (value: boolean) => { },

});

const ContextProvider = ({ children }: { children: ReactElement }) => {


	const [Mode, setMode] = useState<boolean>(false);

	useEffect(() => {
		//const cookies = new Cookies();

	}, []);



	return (
		<Context.Provider
			value={{
				Mode,
				setMode
			}}
		>
			{children}
		</Context.Provider>
	);
};
export default ContextProvider;
