import React, { useEffect, useMemo, useRef, useState } from 'react';
import { generateBotResponse } from './utils/chatbot';

export default function App() {
	const [language, setLanguage] = useState('en');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [messageInput, setMessageInput] = useState('');
	const [messages, setMessages] = useState([
		{ id: 1, role: 'bot', text: 'Hello! How can I help you today?' },
		{ id: 2, role: 'user', text: 'Show me the latest campus notices.' },
		{ id: 3, role: 'bot', text: 'Sure! Tap the sidebar to view notices.' }
	]);

	const notices = useMemo(
		() => [
			{ id: 'n1', title: 'Exam Schedule Released', details: 'Mid-semester exams will start from Oct 15. Check the portal for your timetable.' },
			{ id: 'n2', title: 'Library Timing Update', details: 'Library will be open from 8 AM to 10 PM on weekdays.' },
			{ id: 'n3', title: 'Sports Tryouts', details: 'Football and basketball team selections this weekend. Register by Friday.' },
			{ id: 'n4', title: 'Hostel Maintenance', details: 'Water maintenance in Hostel Block B on Saturday, 2-5 PM.' }
		],
		[]
	);

	// Simple label dictionary for UI strings
	const labels = useMemo(() => {
		const dict = {
			en: {
				title: 'Campus Chatbot',
				inputPlaceholder: 'Type a message...',
				send: 'Send',
				mic: 'Mic',
				notices: 'Notices',
				openNotices: 'Open Notices',
				close: 'Close',
				language: 'Language',
				emptyState: 'Say hello to get started!'
			},
			hi: {
				title: 'कैंपस चैटबॉट',
				inputPlaceholder: 'संदेश लिखें...',
				send: 'भेजें',
				mic: 'माइक',
				notices: 'सूचनाएँ',
				openNotices: 'सूचनाएँ खोलें',
				close: 'बंद करें',
				language: 'भाषा',
				emptyState: 'शुरू करने के लिए नमस्ते लिखें!'
			},
			marwari: {
				title: 'कैंपस चैटबोट',
				inputPlaceholder: 'संदेस लिखो...',
				send: 'पठाओ',
				mic: 'माइक',
				notices: 'सूचना',
				openNotices: 'सूचना खोलो',
				close: 'बंद करो',
				language: 'भाषा',
				emptyState: 'शुरुआत खातर राम-राम लिखो!'
			},
			mewari: {
				title: 'कैंपस चैटबोट',
				inputPlaceholder: 'संदेस लिखो...',
				send: 'पठाओ',
				mic: 'माइक',
				notices: 'खबर',
				openNotices: 'खबर खोलो',
				close: 'बंद करो',
				language: 'भाषा',
				emptyState: 'शुरू करबा खातर नमस्कार लिखो!'
			},
			dhundhari: {
				title: 'कैंपस चैटबोट',
				inputPlaceholder: 'संदेस लिखो...',
				send: 'पठाओ',
				mic: 'माइक',
				notices: 'सूचना',
				openNotices: 'सूचना खोलो',
				close: 'बंद करो',
				language: 'भाषा',
				emptyState: 'शुरुआत खातिर नमस्ते लिखो!'
			},
			harauti: {
				title: 'कैंपस चैटबोट',
				inputPlaceholder: 'संदेस लिखो...',
				send: 'पठाओ',
				mic: 'माइक',
				notices: 'सूचना',
				openNotices: 'सूचना खोलो',
				close: 'बंद करो',
				language: 'भाषा',
				emptyState: 'शुरू करबा वास्ते राम-राम लिखो!'
			},
			mewati: {
				title: 'कैंपस चैटबोट',
				inputPlaceholder: 'संदेस लिखो...',
				send: 'पठाओ',
				mic: 'माइक',
				notices: 'सूचना',
				openNotices: 'सूचना खोलो',
				close: 'बंद करो',
				language: 'भाषा',
				emptyState: 'शुरू करन खातर नमस्ते लिखो!'
			}
		};
		return dict[language] || dict.en;
	}, [language]);

	const chatEndRef = useRef(null);

	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, isSidebarOpen]);

	const handleSend = () => {
		const text = messageInput.trim();
		if (!text) return;

		const newMessage = { id: Date.now(), role: 'user', text };
		setMessages(prev => [...prev, newMessage]);

		setMessageInput('');

		// Generate intelligent bot response
		setTimeout(() => {
			const botResponse = generateBotResponse(text, language, notices);
			setMessages(prev => [
				...prev,
				{
					id: Date.now() + 1,
					role: 'bot',
					text: botResponse
				}
			]);
		}, 800);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	const handleMic = () => {
		alert('Mic placeholder: voice input coming soon!');
	};

	const handleNoticeClick = (notice) => {
		alert(`${notice.title}\n\n${notice.details}`);
	};

	const languageOptions = [
		{ value: 'en', label: 'English' },
		{ value: 'hi', label: 'Hindi' },
		{ value: 'marwari', label: 'Marwari' },
		{ value: 'mewari', label: 'Mewari' },
		{ value: 'dhundhari', label: 'Dhundhari' },
		{ value: 'harauti', label: 'Harauti' },
		{ value: 'mewati', label: 'Mewati' }
	];

	return (
		<div className="h-screen w-screen bg-gray-100 flex flex-col">
			{/* Header */}
			<header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b">
				<div className="flex items-center gap-3">
					<button
						onClick={() => setIsSidebarOpen(true)}
						className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium bg-white hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:hidden"
						aria-label={labels.openNotices}
					>
						<span className="i-tabler-menu-2 mr-2">☰</span>
						{labels.openNotices}
					</button>
					<div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
						CC
					</div>
					<h1 className="text-lg sm:text-xl font-semibold text-gray-900">{labels.title}</h1>
				</div>

				<div className="flex items-center gap-2 sm:gap-4">
					<div className="hidden sm:flex items-center text-sm text-gray-600">{labels.language}:</div>
					<select
						value={language}
						onChange={(e) => setLanguage(e.target.value)}
						className="rounded-md border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500"
					>
						{languageOptions.map(opt => (
							<option key={opt.value} value={opt.value}>{opt.label}</option>
						))}
					</select>

					<button
						onClick={() => setIsSidebarOpen(true)}
						className="hidden sm:inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium bg-white hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						{labels.notices}
					</button>
				</div>
			</header>

			{/* Main Area */}
			<div className="flex-1 relative flex">
				{/* Sidebar (overlay on mobile, panel on desktop) */}
				{/* Backdrop */}
				{isSidebarOpen && (
					<div
						className="fixed inset-0 bg-black/30 sm:hidden"
						onClick={() => setIsSidebarOpen(false)}
						aria-hidden="true"
					/>
				)}
				<aside
					className={`fixed sm:static z-30 top-0 right-0 h-full sm:h-auto w-80 max-w-[85%] bg-white border-l shadow-xl sm:shadow-none transform transition-transform duration-300
						${isSidebarOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'}
						flex flex-col`}
					aria-label="Notices Sidebar"
				>
					<div className="flex items-center justify-between px-4 py-3 border-b">
						<h2 className="font-semibold text-gray-900">{labels.notices}</h2>
						<button
							onClick={() => setIsSidebarOpen(false)}
							className="sm:hidden inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 active:bg-gray-100"
						>
							{labels.close}
						</button>
					</div>
					<div className="flex-1 overflow-y-auto">
						<ul className="divide-y">
							{notices.map((n) => (
								<li key={n.id} className="p-4 hover:bg-gray-50 cursor-pointer" onClick={() => handleNoticeClick(n)}>
									<div className="font-medium text-gray-900">{n.title}</div>
									<div className="mt-1 text-sm text-gray-600 line-clamp-2">{n.details}</div>
								</li>
							))}
						</ul>
					</div>
				</aside>

				{/* Chat column */}
				<div className="flex-1 flex flex-col">
					{/* Chat window */}
					<div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-3">
						{messages.length === 0 && (
						      <div className="h-full flex items-center justify-center text-gray-500 text-sm">
								{labels.emptyState}
							</div>
						)}
						{messages.map((msg) => {
							const isUser = msg.role === 'user';
							return (
								<div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
									<div className={`max-w-[80%] sm:max-w-[65%] rounded-2xl px-3 py-2 shadow
										${isUser ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-gray-200 text-gray-900 rounded-tl-sm'}
									`}>
										<p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
										<div className={`mt-1 text-[10px] ${isUser ? 'text-blue-100' : 'text-gray-600'}`}>
											{new Date(msg.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
										</div>
									</div>
								</div>
							);
						})}
						<div ref={chatEndRef} />
					</div>

					{/* Input bar */}
					<div className="bg-white border-t px-3 sm:px-6 py-3">
						<div className="flex items-end gap-2">
							<textarea
								rows={1}
								value={messageInput}
								onChange={(e) => setMessageInput(e.target.value)}
								onKeyDown={handleKeyDown}
								placeholder={labels.inputPlaceholder}
								className="flex-1 resize-none max-h-32 rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
							<button
								onClick={handleMic}
								className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-full border text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
								aria-label={labels.mic}
								title={labels.mic}
							>
								🎤
							</button>
							<button
								onClick={handleSend}
								disabled={!messageInput.trim()}
								className="h-10 shrink-0 inline-flex items-center justify-center rounded-full px-4 font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								{labels.send}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}