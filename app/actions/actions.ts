"use server";

import { revalidatePath } from "next/cache";

export const getTinyUrls = async () => {
	const res = await fetch(`https://urlbae.com/api/urls`, {
		headers: {
			Authorization: `Bearer ${process.env.API_KEY}`,
			"Content-Type": "application/json",
		},
	});
	const data = await res.json();
	return data.data.urls;
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
		const res = await fetch("https://urlbae.com/api/url/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.API_KEY}`,
			},
			body: JSON.stringify({
				url: urlText,
			}),
		});
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
