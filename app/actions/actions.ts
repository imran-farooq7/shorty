"use server";

import { error } from "console";
import { revalidatePath } from "next/cache";

export const getTinyUrls = async () => {
	const res =
		await fetch(`https://api.tinyurl.com/urls/available?api_token=${process.env.API_TOKEN}
`);
	const data = await res.json();
	return data.data;
};
export const createTinyUrl = async (prevState: any, formData: FormData) => {
	const url = formData.get("url");
	const urlText = url!.toString();
	if (urlText === "") {
		return {
			...prevState,
			error: true,
			message: "Invalid URL",
		};
	}

	try {
		const res = await fetch(
			`https://api.tinyurl.com/create?api_token=${process.env.API_TOKEN}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
				},
				body: JSON.stringify({
					url: urlText,
				}),
			}
		);
		const data = await res.json();
		if (res.ok) {
			revalidatePath("/");
			return {
				...prevState,
				message: "Link created successfully",
				success: true,
			};
		} else {
			return {
				...prevState,
				error: true,
				message: "Something went wrong",
			};
		}
	} catch (error) {
		console.log(error);
	}
};