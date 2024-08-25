import { ZodType } from "zod"

export default <T>(data: T, type: ZodType<T>): T => {
	const result = type.safeParse(data)

	if (result.error) {
		console.error(
			"Invalid data type, please report to https://github.com/zS1L3NT/ts-npm-ytmusic-api/issues/new/choose",
			JSON.stringify(
				{
					data,
					schema: type,
					error: result.error,
				},
				null,
				2,
			),
		)
	}

	return data
}
