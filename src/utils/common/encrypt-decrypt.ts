import crypto from 'crypto-js';

export const encrypt = (text: string) => {
    if(text && text.length > 0 && process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY){
        const cipherText = crypto.AES.encrypt(text, process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY).toString();
        return cipherText;
    }
    return null;
}

export const decrypt = (encryptedText: string | null) => {
    if(encryptedText && encryptedText.length > 0 && process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY){
        try{
            const bytes = crypto.AES.decrypt(encryptedText, process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY);
            const plainText = bytes.toString(crypto.enc.Utf8);
            return plainText;
        }catch(e){
            console.log(e);
            return null;
        }
    }
    return null;
}

export const convertToBase64 = (text: string) => {
    try {
        if(text && text.length > 0){
            return Buffer.from(text, 'utf-8').toString('base64');
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
    
}

export const convertToPlainText = (encodeString: string):string|null => {
    try {
        if(encodeString && encodeString.length > 0){
            return Buffer.from(encodeString, 'base64').toString('utf-8');
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
    
}