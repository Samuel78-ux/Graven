import React from "react";

export default function FormRegister(props) {
	<div className='flex flex-col items-center justify-center min-h-screen py-2'>
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'
		>
			<h1 className='text-6xl font-bold'>Register</h1>
			<div className='flex flex-col space-y-4 mt-4'>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='px-4 py-2 border border-gray-300 rounded-md'
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='px-4 py-2 border border-gray-300 rounded-md'
				/>
				<button
					type='submit'
					className='px-4 py-2 text-white bg-blue-600 rounded-md'
				>
					Register
				</button>
			</div>
		</form>
	</div>;
}
