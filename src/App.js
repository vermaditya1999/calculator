import { useState } from 'react';

export default function App() {
	const [password, setPassword] = useState(generateRandomPassword());
	const [popoverVisibility, setPopoverVisibility] = useState(false);

	return (
		<div className='w-screen h-screen'>
			<div className='h-screen flex justify-center pt-52'>
				<div className='flex flex-col items-center'>
					<p className='font-serif text-5xl font-semibold text-gray-900 '>Quick Pass</p>
					<p className='mt-1 text-gray-400'>generate safe passwords</p>
					<div className='relative mt-10'>
						<input
							type='text'
							readOnly
							className='font-mono w-96 text-center border text-xl py-2 px-6 outline-none rounded-full text-gray-900'
							value={password}
						/>
						<div className='absolute top-0 right-0 bottom-0'>
							<div
								className={`absolute -right-2 -top-5 animate-fadeInOut ${
									popoverVisibility ? 'visible' : 'hidden'
								}`}>
								<CopiedPopover />
							</div>
							<button
								className='relative top-1/2 -translate-y-1/2 right-4 text-gray-400 hover:text-gray-900'
								onClick={() => {
									navigator.clipboard.writeText(password);
									setPopoverVisibility(true);
									setTimeout(() => setPopoverVisibility(false), 2000);
								}}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5 h-5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
									/>
								</svg>
							</button>
						</div>
					</div>
					<button
						onClick={() => setPassword(generateRandomPassword())}
						className='block mt-4 px-4 py-1 text-lg rounded-full text-teal-50 bg-teal-600 hover:shadow-md'>
						Generate
					</button>
				</div>
			</div>
		</div>
	);
}

function CopiedPopover() {
	return (
		<div>
			<div className='z-10 relative w-min'>
				<div className='-z-10 bg-red absolute left-1/2 -bottom-1 h-4 w-4 -translate-x-1/2 -rotate-45 bg-gray-600'></div>
				<div className=' rounded-full bg-gray-600 px-2 text-gray-50'>Copied!</div>
			</div>
		</div>
	);
}

function random(low, high) {
	return low + Math.random() * (high - low + 1);
}

function generateRandomPassword() {
	const length = 16;
	const lowerASCIIbound = 33;
	const upperASCIIbound = 126;

	let password = '';
	for (let i = 0; i < length; ++i) {
		password += String.fromCharCode(random(lowerASCIIbound, upperASCIIbound));
	}

	return password;
}
