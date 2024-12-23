
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const constant = require(".././config/constant");
const config = require("../config/config");
const client = new S3Client({
    region: config.AWS_CONFIG.AWS_REGION,
    credentials: {
        accessKeyId: config.AWS_CONFIG.AWS_ACCESS_KEY,
        secretAccessKey: config.AWS_CONFIG.AWS_SECRET_KEY,
    },
});
const myBucket = config.AWS_CONFIG.AWS_BUCKET_NAME;

class AwsHelper {

    async getSignedUrls({ fileList, type, folderName }) {
        try {
            const signedUrlExpireSeconds = 60 * 60;
            const method = type === constant.AWS_SIGNED_URL_TYPE.GET ? constant.AWS_SIGNED_URL_TYPE.GET : constant.AWS_SIGNED_URL_TYPE.PUT;

            return await Promise.all(
                fileList.map(async (file) => {
                    const params = {
                        method,
                        Bucket: myBucket,
                        Key: folderName+ "/"+ file.path,
                        expires: signedUrlExpireSeconds,
                    };
                    const command = method === constant.AWS_SIGNED_URL_TYPE.PUT
                        ? new PutObjectCommand(params)
                        : new GetObjectCommand(params);

                    const signedUrl = await getSignedUrl(client, command, {expiresIn: 3600});
                    return {...file, signedUrl};
                })
            );
        } catch (error) {
            console.error(error);
            throw error;
        }
    }


}

module.exports.AwsHelper = new AwsHelper();
