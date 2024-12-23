const { CommonHelper } = require("./common.helper");


/**
 * Utility class for handling JWT tokens.
 */
class AesCryptoHelper {


    async aesDecrypt(input, arrayInput) {
        // let arr = [];
        await CommonHelper.asyncForEach(Object.keys(input), async (inputElement) => {
            // if need to check on this key or not
            if (arrayInput.includes(inputElement)) {
                // if that key is an array need to check again for internal element
                if (Array.isArray(input[inputElement])) {
                    await CommonHelper.asyncForEach(input[inputElement], async (nestedElement, index) => {
                        if (nestedElement && typeof nestedElement === "object") {
                            await this.aesDecrypt(nestedElement, arrayInput)
                        } else {
                            
                            input[inputElement][index] = await CommonHelper.aesDecript(nestedElement);
                        }
                    })
                } else if (input[inputElement] && typeof input[inputElement] === "object") {
                    await this.aesDecrypt(input[inputElement], arrayInput);
                } else {
                    input[inputElement] = await CommonHelper.aesDecript(input[inputElement]);
                }
            }
        })
    }

    async aesEncrypt(input, arrayInput) {
        await CommonHelper.asyncForEach(Object.keys(input), async (inputElement) => {
            // if need to check on this key or not
            if (arrayInput.includes(inputElement)) {
                // if that key is an array need to check again for internal element
                if (Array.isArray(input[inputElement])) {
                    await CommonHelper.asyncForEach(input[inputElement], async (nestedElement, index) => {
                        if (nestedElement && typeof nestedElement === "object") {
                            await this.aesEncrypt(nestedElement, arrayInput)
                        } else {
                            input[inputElement][index] = await CommonHelper.aesEncript(nestedElement);
                        }
                    })
                } else if (input[inputElement] && typeof input[inputElement] === "object") {
                    await this.aesEncrypt(input[inputElement], arrayInput);
                } else {
                    input[inputElement] = await CommonHelper.aesEncript(input[inputElement]);
                }

            }

        })

    }
}

module.exports.AesCryptoHelper = new AesCryptoHelper();
