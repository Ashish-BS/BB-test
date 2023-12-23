import isEmpty from "lodash/isEmpty";
import { convertToBase64, decrypt } from "./encrypt-decrypt";
import { NextRouter } from "next/router";
import config from "@/constants";
export const isSet = (obj: any) => {
  if (
    obj &&
    obj != "null" &&
    obj != undefined &&
    obj != "undefined" &&
    obj !== "" &&
    obj != "[]" &&
    obj != "None" &&
    obj !== "" &&
    !isEmpty(obj)
  ) {
    if (typeof obj != "undefined") {
      return true;
    }
  }
  return false;
};

export const getStoredUserJsonData = (variableName: string) => {
  try {
    return typeof localStorage !== "undefined"
      ? JSON.parse(
          decrypt(
            localStorage.getItem(convertToBase64(variableName) as string)
          ) as string
        )
      : "";
  } catch (error) {
    return null;
  }
};

export function rgbToHex(red: number, green: number, blue: number) {
  const rgb = (red << 16) | (green << 8) | (blue << 0);
  return "#" + (0x1000000 + rgb).toString(16).slice(1);
}

export const getAverageRGB = (imgEl: HTMLImageElement) => {
  const blockSize = 5;
  const defaultRGB = { r: 0, g: 0, b: 0 };
  const canvas = document.createElement("canvas");
  const context = canvas.getContext && canvas.getContext("2d");
  let imageData;
  let i = -4;
  const rgb = { r: 0, g: 0, b: 0 };
  let count = 0;

  if (!context) {
    return defaultRGB;
  }

  const height = (canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height);
  const width = (canvas.width =
    imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width);

  context.drawImage(imgEl, 0, 0);

  try {
    imageData = context.getImageData(0, 0, width, height);
  } catch (e) {
    console.log(e);
    return defaultRGB;
  }

  const length = imageData.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += imageData.data[i];
    rgb.g += imageData.data[i + 1];
    rgb.b += imageData.data[i + 2];
  }

  // floor values
  rgb.r = Math.round(rgb.r / count);
  rgb.g = Math.round(rgb.g / count);
  rgb.b = Math.round(rgb.b / count);
  return rgb;
};

export const formatName = (fullName: string) => {
  const nameArray = fullName.split(" ");
  if (nameArray.length > 1) {
    return `${nameArray[0]} ${nameArray[1].slice(0, 1)}.`;
  }
  return nameArray[0];
};

export const redirectToUrl = (router: NextRouter) => {
  if (router && router.query) {
    const page = router.query["page"] as string;
    const query = router.query["q"] as string;
    let url = "/";
    if (page && page.includes("slug")) {
      const baseUrl = page.split("/");
      if (baseUrl.length > 1) {
        const pathName = baseUrl[1];
        if (query) {
          url += pathName + "/" + query;
        } else {
          url += pathName;
        }
      }
    }
    return url;
  }
  return "";
};

export const translateLocalizedText = async (
  data: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setGreetingText: React.Dispatch<React.SetStateAction<string>>,
  setGreetingEmoji?: React.Dispatch<React.SetStateAction<string>>
) => {
  setLoading(true);
  try {
    const encryptedCountry = localStorage.getItem(
      convertToBase64(config.LOCAL_STORAGE_VARIABLES.COUNTRY) as string
    );
    const jsonData = JSON.parse(JSON.stringify(data));
    let country: string | null = "";
    if (encryptedCountry) {
      country = decrypt(encryptedCountry);
    }
    if (country && country.length > 0 && country !== null) {
      const greetingData = jsonData.find(
        (data: { [key: string]: string }) => data[country as string]
      );
      if (greetingData) {
        setGreetingText(greetingData[country].translated_text);
      }
      if (setGreetingEmoji && greetingData[country].greeting_emoji.length) {
        setGreetingEmoji(greetingData[country].greeting_emoji);
      }
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

export const sortObjectArrayBasedOnBooleanProp = (
  data: Array<any>,
  parentProperty: string,
  property: string
) => {
  const sortedArray: any[] = [];
  data.forEach((item) => {
    if (item[parentProperty][property] === true) {
      sortedArray.unshift(item);
    } else {
      sortedArray.push(item);
    }
  });
  return sortedArray;
};
