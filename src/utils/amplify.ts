import Amplify, { Auth, Storage } from "aws-amplify";

Amplify.configure({
	Auth: {
		identityPoolId: "ap-northeast-2:88bbdf71-f8db-4267-bbf7-496a072f5b8a", //REQUIRED - Amazon Cognito Identity Pool ID
		region: "ap-northeast-2", // REQUIRED - Amazon Cognito Region
		// userPoolId: "XX-XXXX-X_abcd1234", //OPTIONAL - Amazon Cognito User Pool ID
		// userPoolWebClientId: "XX-XXXX-X_abcd1234", //OPTIONAL - Amazon Cognito Web Client ID
	},
	Storage: {
		AWSS3: {
			bucket: "sgsncns130837-dev", //REQUIRED -  Amazon S3 bucket name
			region: "ap-northeast-2", //OPTIONAL -  Amazon service region
		},
	},
});

export const requestImages = async () => {
	try {
		const res = await Storage.list("test1/");
		res.shift();
		return res;
		// console.log(res);
	} catch (err) {
		console.log(err);
		return;
	}
};
