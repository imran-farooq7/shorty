"use client";
import { useActionState, useEffect } from "react";
import { createTinyUrl } from "../actions/actions";
import { toast } from "react-toastify";

const LinkForm = () => {
	const [state, action, isPending] = useActionState(createTinyUrl, {
		message: null,
		error: false,
		success: false,
	});
	useEffect(() => {
		if (state.success) {
			toast.success(state.message);
		}
		if (state.error && state.message === "Something went wrong") {
			toast.error(state.message);
		}
	}, [state.message]);
	return (
		<section className="relative bg-gray-100">
			<div className="max-w-4xl mx-auto p-6 space-y-6">
				<form
					action={action}
					className="flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg relative"
				>
					<input
						type="url"
						className="p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
						placeholder="Shorten a link here"
						name="url"
					/>

					<button
						className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
						disabled={isPending}
					>
						{isPending ? "Shorting..." : "Shorten It!"}
					</button>
					{state?.message === "Invalid URL" && (
						<div
							id="err-msg"
							className="absolute left-[46%] bottom-3 text-red text-sm italic"
						>
							{state.message}
						</div>
					)}
				</form>
			</div>
		</section>
	);
};
export default LinkForm;
